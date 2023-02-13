import clsx from "clsx"
import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        "h-[3.375rem] max-w-[32.75rem] w-full rounded-lg",
        "input bg-gray-500 text-gray-100 placeholder:text-gray-300",
        "focus-within:outline-purple-dark focus-within:border focus-within:border-purple-dark",
        className
      )}
      {...props}
    />
  )
}
