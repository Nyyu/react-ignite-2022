import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react'

import { ButtonVariants, SquaredButton } from './buttons.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariants
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, variant = 'base', ...props }: ButtonProps,
  ref,
) => {
  return (
    <SquaredButton variant={variant} {...props} ref={ref}>
      {children}
    </SquaredButton>
  )
}

export const IconButton = forwardRef(ButtonBase)
