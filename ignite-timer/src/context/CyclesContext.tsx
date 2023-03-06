import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from 'react'

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

type CyclesReducerActionType = {
  type: 'ADD' | 'UPDATE_CURRENT' | 'INTERRUPT_CURRENT' | 'FINISH_CURRENT'
  payload: {
    data: any
  }
}

const CyclesContext = createContext({} as CyclesContextType)

interface CyclesProviderProps {
  children: ReactNode
}

export const CyclesProvider = ({ children }: CyclesProviderProps) => {
  const [cycles, dispatch] = useReducer(
    (state: Cycle[], action: CyclesReducerActionType) => {
      switch (action.type) {
        case 'ADD':
          return [...state, action.payload.data]
        case 'FINISH_CURRENT':
          return state.map((cycle) => {
            if (cycle.id === action.payload.data) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
            // eslint-disable-next-line prettier/prettier
          })
        case 'INTERRUPT_CURRENT':
          return state.map((cycle) => {
            if (cycle.id === action.payload.data) {
              return { ...cycle, interruptedDate: new Date() }
            }

            return cycle
          })

        default:
          return state
      }
    },
    // eslint-disable-next-line prettier/prettier
    []
  )

  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const addNewCycle = (newCycle: Cycle) => {
    dispatch({
      type: 'ADD',
      payload: {
        data: newCycle,
      },
    })
  }

  const changeActiveCycle = (id: string) => setActiveCycleId(id)
  const changeAmountSecondsPassed = (value: number) =>
    setAmountSecondsPassed(value)

  const markActiveCycleAsFinished = () => {
    dispatch({
      type: 'FINISH_CURRENT',
      payload: {
        data: activeCycleId,
      },
    })
    setActiveCycleId(null) // -> reset app state
  }

  const markActiveCycleAsInterrupted = () => {
    dispatch({
      type: 'INTERRUPT_CURRENT',
      payload: {
        data: activeCycleId,
      },
    })
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
