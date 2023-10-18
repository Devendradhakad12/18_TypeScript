
type InputValType = string | number
import { Dispatch, SetStateAction } from "react"

const Generic = <T extends InputValType>({ label, value, setVal }: { label: string, value: T, setVal: Dispatch<SetStateAction<T>> }) => {
    return (
        <div>

            <label htmlFor="">{label}</label>

            <input type="text" value={value} onChange={(e) => {
                setVal(e.target.value as T)
            }} />
            <hr />
        </div>
    )
}

export default Generic
