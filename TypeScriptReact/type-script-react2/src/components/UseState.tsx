import React, { useState } from "react";



interface Person {
    name: string;
    age: number;
}

const UseState = () => {
    const [user, setUser] = useState<Person>();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`${user?.name} , ${user?.age}`)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input placeholder="name" type="text" value={user?.name || ""} onChange={(e) => { setUser({ ...user!, name: e.target.value }) }} />
                <input placeholder="age" type="number" value={user?.age || ""} onChange={(e) => { setUser({ ...user!, age: Number(e.target.value) }) }} />
                <button type="submit">Submit</button>
            </form>
            <hr />
        </div>
    )
}

export default UseState
