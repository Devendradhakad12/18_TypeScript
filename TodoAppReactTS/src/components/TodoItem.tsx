import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"


type PropsType = {
    todo: TodoItemType,
    completeHandler: (e: TodoItemType["id"]) => void,
    deleteHnadler: (e: TodoItemType["id"]) => void,
    editHnadler: (e: TodoItemType["id"], title: TodoItemType["title"]) => void,
}

const TodoItem = ({ todo, completeHandler, deleteHnadler, editHnadler }: PropsType) => {

    const [editActive, setEditActive] = useState<boolean>(false)
    const [editTitle, setEditTitle] = useState<string>(todo.title)
    return (
        <Paper sx={{ padding: "1rem" }} >
            <Stack direction={"row"} alignItems={"center"}>
                {
                    editActive ? <TextField value={editTitle} onChange={(e) => setEditTitle(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && editTitle !== "") { editHnadler(todo.id, editTitle) ; setEditActive(false) } }} />
                        : <Typography marginRight={"auto"}>{todo?.title}</Typography>
                }
                <Checkbox checked={todo.isCompleted} onChange={() => completeHandler(todo.id)} />
                <Button onClick={() => { setEditActive(!editActive); editHnadler(todo.id, editTitle); }} >{editActive ? "Done" : "Edit"}</Button>
                <Button onClick={() => deleteHnadler(todo.id)} >Delete</Button>
            </Stack>

        </Paper>
    )
}
 
export default TodoItem
