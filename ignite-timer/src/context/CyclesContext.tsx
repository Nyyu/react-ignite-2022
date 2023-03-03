import { createContext, ReactNode, useContext, useState } from 'react'

export type Cycle = {
  id: string
  task: string
  minutesAmount: number
  startTime: Date
  interruptedDate?: Date
  finishedDate?: Date
}

type CyclesContextType = {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  addNewCycle: (cycle: Cycle) => void
  changeActiveCycle: (id: string) => void
  changeAmountSecondsPassed: (value: number) => void
  markActiveCycleAsFinished: () => void
  markActiveCycleAsInterrupted: () => void
}

const CyclesContext = createContext({} as CyclesContextType)

interface CyclesProviderProps {
  children: ReactNode
}

export const CyclesProvider = ({ children }: CyclesProviderProps) => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const addNewCycle = (newCycle: Cycle) => {
    setCycles((prev) => [...prev, newCycle])
  }

  const changeActiveCycle = (id: string) => setActiveCycleId(id)
  const changeAmountSecondsPassed = (value: number) =>
    setAmountSecondsPassed(value)

  const markActiveCycleAsFinished = () => {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
        // eslint-disable-next-line prettier/prettier
      })
    )

    setActiveCycleId(null) // -> reset app state
  }

  const markActiveCycleAsInterrupted = () => {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
        // eslint-disable-next-line prettier/prettier
      })
    )

    setActiveCycleId(null)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        addNewCycle,
        changeActiveCycle,
        changeAmountSecondsPassed,
        markActiveCycleAsFinished,
        markActiveCycleAsInterrupted,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export const useCyclesContext = () => useContext(CyclesContext)
