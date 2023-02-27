import { Play } from 'phosphor-react'
import { Tooltip } from '../../components/Tooltip'
import {
  ButtonSubmit,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  SeparatorContainer,
  TaskInput,
  TimeInput,
} from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const newCycleFormValidationSchema = z.object({
  task: z.string().trim().min(1, 'Inform the task'),
  minutesAmount: z.number().min(5).max(60),
})
type TNewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

type Cycle = {
  id: string
  task: string
  minutesAmount: number
}

export const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<TNewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      minutesAmount: 25,
      task: '',
    },
  })

  const taskValue = watch('task')
  const isSubmitDisabled = !taskValue

  const handleNewCycleFormSubmit: SubmitHandler<TNewCycleFormData> = (data) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((prev) => [...prev, newCycle])
    setActiveCycleId(id)

    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleNewCycleFormSubmit)}>
        <FormContainer aria-describedby="Work form">
          <label htmlFor="task">{"I'm going to work with"}</label>
          <Tooltip message={errors.task?.message ?? ''}>
            <TaskInput
              id="task"
              list="task-suggestion"
              placeholder="Give it a name"
              {...register('task')}
            />
          </Tooltip>

          <datalist id="task-suggestion">
            <option value="Banana =D" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <Tooltip message={errors.minutesAmount?.message ?? ''}>
            <TimeInput
              type="number"
              id="minutesAmount"
              step={5}
              placeholder="00"
              {...register('minutesAmount', {
                valueAsNumber: true,
              })}
            />
          </Tooltip>
          <span>minutes</span>
        </FormContainer>

        <CountDownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <SeparatorContainer>:</SeparatorContainer>
          <span>{seconds[0]}</span>
          <span>{seconds[0]}</span>
        </CountDownContainer>

        <ButtonSubmit type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Start
        </ButtonSubmit>
      </form>
    </HomeContainer>
  )
}
