import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import Info from "@site/src/components/Info";
import Note from "@site/src/components/Note";
import Alert from "@site/src/components/Note";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Info,
  Note,
  Alert,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  //   Highlight,
};
