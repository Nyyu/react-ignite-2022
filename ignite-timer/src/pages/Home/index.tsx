import { Play } from 'phosphor-react'
import {
  ButtonSubmit,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  SeparatorContainer,
  TaskInput,
  TimeInput,
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer aria-describedby="Work form">
          <label htmlFor="task">{"I'm going to work with"}</label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestion"
            placeholder="Give it a name"
          />

          <datalist id="task-suggestion">
            <option value="Banana =D" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <TimeInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            placeholder="00"
          />
          <span>minutes</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <SeparatorContainer>:</SeparatorContainer>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <ButtonSubmit type="submit" disabled>
          <Play size={24} />
          Start
        </ButtonSubmit>
      </form>
    </HomeContainer>
  )
}
