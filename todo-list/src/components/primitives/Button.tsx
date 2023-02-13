import clsx from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: "fill" | "outline" | "square"
  scheme?: "primary" | "secondary"
}

export const Button = ({
  children,
  variant = "fill",
  scheme = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "btn border-none text-gray-100 font-bold text-sm flex gap-2",
        {
          "bg-blue-dark hover:bg-blue-default":
            variant === "fill" && scheme === "primary",
          "bg-purple-dark hover:bg-purple-default":
            variant === "fill" && scheme === "secondary",
        },
        {
          "ring-blue-dark": variant === "outline" && scheme === "primary",
          "ring-purple-dark": variant === "outline" && scheme === "secondary",
        },
        {
          "btn-square": variant === "square",
          "bg-transparent ring-1": variant === "outline",
          "hover:bg-blue-default": scheme === "primary",
          "hover:bg-purple-default": scheme === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
