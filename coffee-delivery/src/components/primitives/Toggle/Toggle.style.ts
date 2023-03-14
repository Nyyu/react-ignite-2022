import * as Toggle from '@radix-ui/react-toggle'
import styled from 'styled-components'

export const ToggleBody = styled(Toggle.Root)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-size: ${(props) => props.theme['font-sm']};
  font-weight: 400;

  border-radius: 6px;
  padding: 1.6rem;

  background-color: ${(props) => props.theme['base-300']};
  color: ${(props) => props.theme['base-600']};

  transition: background-color 0.2s;

  :hover {
    background-color: ${(props) => props.theme['base-400']};
  }

  svg {
    color: ${(props) => props.theme['secondary-500']};
  }

  &[data-state='on'] {
    box-shadow: 0 0 0 0.1rem ${(props) => props.theme['secondary-500']};
    background-color: ${(props) => props.theme['secondary-400']};
  }
`
