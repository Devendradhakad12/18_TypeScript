 
import { useCounter } from '../provider/conuterContext'

const CounterBtn = () => {
    const context = useCounter()
    return (
        <button className='button' onClick={() => context?.setCount(context?.value + 1)}>

            {context?.value}
        </button>
    )
}

export default CounterBtn
