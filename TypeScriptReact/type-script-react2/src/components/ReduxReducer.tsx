import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { decrement, increment, incrementByValue } from "../store/reducer/rootReducer"
import { useState } from "react"



const ReduxReducer = () => {
    const [val, setVal] = useState<number>(0)
    const { count } = useSelector((state: RootState) => state.rootReducer)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>@ToolKit</h1>
            <h2>Using Reducer</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input type="number" value={val || ""} onChange={(e)=>setVal(Number(e.target.value))} />
            <button onClick={()=>dispatch(incrementByValue(val))}>Add</button>
        </div>
    )
}

export default ReduxReducer
