import { createContext, useContext, useState } from 'react'


interface counterProviderProps {
    children: React.ReactNode
}

interface counterContextProps {
    value: number,
    setCount: (num: number) => void
}

const conuterContext = createContext<counterContextProps | null>(null)

export const CounterProvider: React.FC<counterProviderProps> = ({ children }) => {
    const [count, setCount] = useState<number>(1)
    return (
        <conuterContext.Provider value={{ value: count, setCount }}>
            {children}
        </conuterContext.Provider>
    )
}

export const useCounter = () => {
    return useContext(conuterContext)
}

export default createContext