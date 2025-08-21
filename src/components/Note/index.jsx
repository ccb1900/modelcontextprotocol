import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"
// import {
//   Alert,
//   AlertDescription,
//   AlertTitle,
// } from "@/components/ui/alert"
export default function Info({children}) {
  return (
    <div className="w-full p-6 flex justify-center">
      {children}
      <div className="w-full max-w-lg">
                    Please check your email and click the verification link to activate your account.

      </div>
    </div>
  )
}