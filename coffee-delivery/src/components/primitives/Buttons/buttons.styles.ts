import styled from 'styled-components'

export type ButtonSizes = 'sm' | 'md'
export type ButtonVariants = 'base' | 'primary' | 'secondary' | 'primary-alt'

interface ButtonProps {
  size?: ButtonSizes
  variant: ButtonVariants
}

const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  gap: 0.4rem;

  font-weight: ${(props) => (props.size === 'md' ? '700' : '400')};
  line-height: 160%;
  font-size: ${(props) =>
    props.size === 'md' ? props.theme['font-md'] : props.theme['font-sm']};

  transition: background-color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme['base-500']};
  }

  background-color: ${(props) => {
    switch (props.variant) {
      case 'base':
        return props.theme['base-300']
      case 'primary':
        return props.theme['primary-500']
      case 'primary-alt':
        return props.theme['primary-400']
      case 'secondary':
        return props.theme['secondary-600']
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case 'base':
        return props.theme['base-600']
      case 'primary-alt':
        return props.theme['primary-600']
      default:
        return props.theme.white
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case 'base':
          return props.theme['base-400']
        case 'primary':
          return props.theme['primary-600']
        case 'secondary':
          return props.theme['secondary-500']
      }
    }};
  }
`

export const ButtonDefault = styled(ButtonContainer)`
  max-width: ${(props) => (props.size === 'md' ? '13.2rem' : '9rem')};
  width: 100%;

  padding: ${(props) =>
    props.size === 'md' ? '1.2rem 0.8rem' : '0.65rem 0.8rem'};
`

export const SquaredButton = styled(ButtonContainer)`
  padding: 0.8rem;
  font-size: 2.2rem;
`
