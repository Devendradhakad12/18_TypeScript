import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "../store/slices/rootSlice"

import { RootState } from "../store/store"



const ReduxSlice = () => {
    const [val, setVal] = useState<number>()
    const dispatch = useDispatch()
    const { count } = useSelector((state: RootState) => state.rootSlice)

    return (
        <div>
            <h1>@ToolKit</h1>
            <h2>Using slice</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input type="number" value={val || ""} onChange={(e) => setVal(Number(e.target.value))} />
            <button onClick={() => dispatch(incrementByValue(val!))}>Add</button>
            <hr />
        </div>
    )
}

export default ReduxSlice
