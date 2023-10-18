import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import TodoItem from "./components/TodoItem"
import { getloalTodos, saveLocal } from "./utils/features"


const App = () => {

  const [todos, setTodos] = useState<TodoItemType[]>(getloalTodos())

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  // set todo in local storage
  useEffect(() => { 
    saveLocal(todos)
  }, [todos])


  // create new todo
  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.random() * 123)
    }
    if (todos !== null) {
      setTodos(prev => [...prev, newTodo])

    } else {
      setTodos([newTodo])
    }
    setTitle("")
  }

  // isCompleted checkBox
  const completHandler = (id: TodoItemType["id"]): void => {
    const checktodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    setTodos(checktodo)
  }

  // edit todo
  const editHandler = (id: TodoItemType["id"], title: TodoItemType["title"]): void => {
    const checktodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    })
    setTodos(checktodo)
  }

  // delete todo
  const deleteHandler = (id: TodoItemType["id"]): void => {
    const deleteTodo = todos.filter(todo => todo.id !== id)
    setTodos(deleteTodo)
  }


  return (
    <Container maxWidth='sm' sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            Todo App - React | TS
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack direction={"column"} height={"80%"} spacing={"1rem"} p={"1rem"} >
        {
          todos?.map((todo) => {
            return <TodoItem todo={todo} key={todo?.id} completeHandler={completHandler} deleteHnadler={deleteHandler} editHnadler={editHandler} />
          })
        }
      </Stack>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} fullWidth label={"New Task"} onKeyDown={(e) => { if (e.key === "Enter" && title !== "") { submitHandler() } }} />
      <Button disabled={title === "" ? true : false} sx={{ margin: "1rem 0" }} onClick={() => submitHandler()} fullWidth variant="contained" >Add</Button>
    </Container>
  )
}

export default App
