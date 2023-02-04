import { ButtonHTMLAttributes, ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"

import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  variant?: "fill" | "outline" | "ghost" | "danger"
  className?: string
}

export const Button = ({
  children,
  asChild = false,
  variant = "fill",
  className = "",
  ...props
}: ButtonProps) => {
  const ButtonComponent = asChild ? Slot : "button"

  return (
    <ButtonComponent
      className={clsx(
        "flex items-center justify-center gap-[.625rem] w-full h-[3.125rem] px-6 rounded-lg font-bold text-base hover:text-white transition-colors",
        {
          "hover:bg-green-400 bg-green-500": variant === "fill",
          "text-green-500 hover:bg-green-500 border-2 border-green-500":
            variant === "outline",
          "active:text-green-500": variant === "ghost",
          "hover:text-red-500": variant === "danger",
        },
        className
      )}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}
