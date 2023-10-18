
import { useReducer } from 'react';

type InitialState = {
    count: number;
}
type ActionType = {
    type: "Increment",
    payload: number
} | {
    type: "Decrement",
    payload: number
}

const UseReducer = () => {

    const intialState: InitialState = {
        count: 0,
    }
    const reducer = (state: InitialState, action: ActionType): InitialState => {
        switch (action.type) {
            case "Increment":
                return {
                    count: state.count + action.payload
                };
            case "Decrement":
                return {
                    count: state.count - action.payload
                }


            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, intialState)

    const increment = (): void => {
        dispatch({
            type: "Increment",
            payload: 2
        })
    }
    const decrement = (): void => {
        dispatch({
            type: "Decrement",
            payload: 2
        })
    }

    return (
        <div>
            <h1>
                count change useReducer'
            </h1>
            <p>{state.count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment} >+</button>
            <hr />
        </div>
    )
}

export default UseReducer
