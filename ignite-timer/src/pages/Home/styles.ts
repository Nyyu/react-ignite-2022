import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 100%;

  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 5.6rem;
  }
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  flex-wrap: wrap;

  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-100']};
`
export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;

  font-size: 16rem;
  line-height: 12.8rem;
  color: ${(props) => props.theme['base-100']};

  display: flex;
  gap: 1.6rem;

  span {
    background-color: ${(props) => props.theme['base-600']};
    padding: 3.2rem 1.6rem;
    border-radius: 8px;
  }
`

export const SeparatorContainer = styled.div`
  padding: 3.2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 6.4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`

export const ButtonSubmit = styled.button`
  border: none;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  border-radius: 9px;
  padding: 1.6rem;

  font-weight: bold;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['base-100']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-600']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const InputBase = styled.input`
  background-color: transparent;
  height: 4rem;
  border: 0;

  border-bottom: 2px solid ${(props) => props.theme['base-400']};
  color: ${(props) => props.theme['base-100']};

  font-weight: inherit;
  font-family: inherit;

  padding: 0 0.8rem;

  &:focus {
    box-shadow: none;
    border-bottom-color: ${(props) => props.theme['green-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['base-400']};
  }
`

export const TaskInput = styled(InputBase)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const TimeInput = styled(InputBase)`
  width: 6.4rem;
`
