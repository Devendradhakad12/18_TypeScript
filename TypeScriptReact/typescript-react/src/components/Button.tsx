import React, { useState } from 'react'

interface MyButtonProps {
    text: string | number | boolean,
    onClick?: () => void,
    something?: boolean,
    className?: string
}



const Button: React.FC<MyButtonProps> = (props) => {
    const { text, onClick = () => { }, className = "" } = props;
    const [value, setValue] = useState<number>(1)

    return (
        <div className='btndiv'>
            {value}
            <button onClick={() => setValue(value + 1)}>
                ValueBtn
            </button>
            <button onClick={onClick} className={className}>{text}</button>

        </div>
    )
}

export default Button
