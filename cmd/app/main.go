package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"
	"unicode"

	// "fmt"

	"github.com/openai/openai-go/v2"
	"github.com/openai/openai-go/v2/option"
	// "github.com/openai/openai-go/v2/shared"
)

func translate() {
	cl := http.Client{
		Transport: &http.Transport{},
	}
	f, _ := os.Open("docs/about/index.mdx")
	sf, _ := io.ReadAll(f)
	params := map[string]string{
		"source_lang": "en",
		"target_lang": "zh",
		"text":        string(sf),
	}

	b, _ := json.Marshal(params)
	resp, _ := cl.Post("https://dplx.xi-xu.me/google", "application/json", bytes.NewBuffer(b))
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Println(string(body))

	var ssss map[string]any

	json.Unmarshal(body, &ssss)

	fmt.Println(ssss["data"])
}

func translate2(content []byte) string {
	return "这是一个测试翻译的函数"
}

func demo(content []byte) string {
	client := openai.NewClient(
		option.WithDebugLog(log.Default()),
		option.WithBaseURL("https://ark.cn-beijing.volces.com/api/v3"), // defaults to "https://api.openai.com/v1"
		option.WithAPIKey("x"),                                         // defaults to os.LookupEnv("OPENAI_API_KEY")
	)
	chatCompletion, err := client.Chat.Completions.New(context.TODO(), openai.ChatCompletionNewParams{
		Messages: []openai.ChatCompletionMessageParamUnion{
			openai.UserMessage("Translate the following markdown file to Chinese (Simplified) (zh). IMPORTANT RULES: 1. DO NOT add '''markdown or any other tags around the translation 2. Make sure the translation does not sound too literal 3. Translate comments as well 4. This file is written in Markdown format - do not treat it as XML or HTML 5. Do not translate: - [!NOTE], [!WARNING], [!TIP], [!IMPORTANT], [!CAUTION] - Variable names, function names, class names - Placeholders like @@INLINE_CODE_x@@ or @@CODE_BLOCK_x@@ - URLs or paths 6. Keep all original markdown formatting intact 7. Return ONLY the translated content without any additional tags or markup Please write the output from left to right."),
			openai.UserMessage(string(content)),
		},
		Model:       "ep-20250820103525-plv5z",
		Temperature: openai.Float(1.3),
		MaxTokens:   openai.Int(8192),
		TopP:        openai.Float(0.8),
	})
	if err != nil {
		panic(err.Error())
	}
	// println("结果")
	// println(chatCompletion.Choices[0].Message.Content)
	return chatCompletion.Choices[0].Message.Content
}

type DebugInfo struct {
	Line int
	Word int
	Path string
}

const MaxTokens = 4000 // 预留一点空间，避免超限
// 计算 token：中文=2，其他=1
func countTokens(s string) int {
	n := 0
	for _, r := range s {
		if unicode.Is(unicode.Han, r) {
			n += 2
		} else {
			n++
		}
	}
	return n
}

// 按标题 (# 开头) 分段
func splitByHeading(content string) []string {
	lines := strings.Split(content, "\n")
	var sections []string
	var buf []string

	for _, line := range lines {
		if strings.HasPrefix(strings.TrimSpace(line), "#") {
			// 新标题前先存上一个段落
			if len(buf) > 0 {
				sections = append(sections, strings.Join(buf, "\n"))
				buf = nil
			}
		}
		buf = append(buf, line)
	}
	if len(buf) > 0 {
		sections = append(sections, strings.Join(buf, "\n"))
	}
	return sections
}

// 主函数：读取文件 -> 按标题分段 -> 合并不超限的段落
func SplitMDXFile(filePath string, maxTokens int) ([]string, error) {
	data, err := os.ReadFile(filePath)
	if err != nil {
		return nil, err
	}
	sections := splitByHeading(string(data))

	var chunks []string
	var cur strings.Builder
	curTokens := 0

	for _, sec := range sections {
		t := countTokens(sec)
		// 如果当前 chunk 加上该段仍在限制内，就合并
		if curTokens+t+2 <= maxTokens { // +2 预留换行分隔
			if cur.Len() > 0 {
				cur.WriteString("\n\n")
			}
			cur.WriteString(sec)
			curTokens += t + 2
		} else {
			// flush 当前，另起一个
			if cur.Len() > 0 {
				chunks = append(chunks, cur.String())
				cur.Reset()
				curTokens = 0
			}
			// 如果单个段落本身就超过 maxTokens，只能单独放
			if t > maxTokens {
				chunks = append(chunks, sec)
			} else {
				cur.WriteString(sec)
				curTokens = t
			}
		}
	}
	if cur.Len() > 0 {
		chunks = append(chunks, cur.String())
	}
	return chunks, nil
}

// 打印分块结果并验证token限制
func printAndValidateChunks(path string, chunks []string, maxTokens int) {

	for i, chunk := range chunks {
		tokenCount := countTokens(chunk)

		// fmt.Printf("%s=== Chunk %d (%d tokens) ===\n", path, i+1, tokenCount)

		// fmt.Println("\n--- End of chunk ---\n")

		if tokenCount > maxTokens {
			fmt.Println(chunk)
			fmt.Printf("%s⚠️ 警告: chunk %d 超出token限制 (%d > %d)\n", path,
				i+1, tokenCount, maxTokens)
		}
	}
}
func processFile(path string) {

	// 等待200ms
	time.Sleep(200 * time.Millisecond) // 模拟处理时间
	// 读取源文件
	// f, _ := os.OpenFile(path, os.O_RDONLY, 0644)
	// bf := bufio.NewReader(f)

	// bf.ReadLine()
	// c, _ := io.ReadAll(f)
	// 写入翻译内容
	targetPath := filepath.Join("translations/zh", path)
	os.MkdirAll(filepath.Dir(targetPath), 0755) // 确保目标目录存在
	wf, _ := os.OpenFile(targetPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
	defer wf.Close()
	chunks, _ := SplitMDXFile(path, 4096)
	printAndValidateChunks(path, chunks, 4096)

	transChunks := []string{}
	for i := 0; i < len(chunks); i++ {
		chunk := chunks[i]
		// fmt.Println(path, len(strings.Join(chunk, "\n")), len(chunks))
		// return
		translatedContent := demo([]byte(chunk)) // Replace with actual translation logic
		transChunks = append(transChunks, translatedContent)

		// log.Printf("Processed file: %s", path)
		// log.Printf("Translated content written to: %s", targetPath)
	}

	_, err := wf.WriteString(strings.Join(transChunks, "\n"))
	if err != nil {
		log.Printf("Error writing to file %s: %v", targetPath, err)
		return
	}

}

func main() {
	// demo()
	// return
	// 创建翻译目录
	os.MkdirAll("translations/zh", 0755)
	filepath.WalkDir("docs", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			log.Println("Error walking path:", path, err)
			return err
		}
		if d.IsDir() {
			// log.Println("Skipping directory:", path)
			os.MkdirAll("translations/zh/"+path, 0755)
			return nil
		}
		if filepath.Ext(path) == ".mdx" && !strings.HasPrefix(path, "docs/specification") {
			// log.Println("Processing file:", path)
			processFile(path)
		} else {
			f, _ := os.Open(path)
			defer f.Close()
			// 创建目标文件路径
			targetPath := filepath.Join("translations/zh", path)
			wf, _ := os.OpenFile(targetPath, os.O_CREATE|os.O_WRONLY, 0644)
			io.Copy(wf, f)
			wf.Close()
			// log.Println("Copied file to:", targetPath)
		}
		return nil
	})

}
