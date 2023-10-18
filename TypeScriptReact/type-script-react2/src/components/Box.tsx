import { ReactNode } from "react";



type PropsType = {
    heading: string,
    count?: number;
    onClick: () => void;
    func1?: (a: string, b: string) => void;
    children: ReactNode;
}

const Box = ({ heading, count = 0, onClick, func1, children }: PropsType) => {
    if (func1) func1("dev", "dhakad")
    return (
        <div>
            <h1> {heading}</h1>
            <p>{count}</p>
            <button onClick={onClick}> Button </button>
            {children}
            <hr />
        </div>
    )
}

export default Box
