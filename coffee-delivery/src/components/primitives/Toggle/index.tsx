import { ReactNode } from 'react'
import { ToggleBody } from './Toggle.style'

interface ToggleButtonProps {
  children: ReactNode
}

export const ToggleButton = ({ children }: ToggleButtonProps) => {
  return <ToggleBody>{children}</ToggleBody>
}
