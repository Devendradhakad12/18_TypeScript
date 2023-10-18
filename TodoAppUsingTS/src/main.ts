import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Array<Todo> = [];

const todosContainer = <HTMLDivElement>document.querySelector(".todoContainer");

const todosInput = <HTMLInputElement>document.getElementsByName("title")[0];

const myForm = <HTMLFormElement>document.getElementById("myForm");

// on submit Event

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    title: todosInput.value,
    isCompleted: false,
    id: String(Math.random() * 100),
  };
  todos.push(todo);
  todosInput.value = "";
  renderTodo(todos);
  console.log(todos);
};

const renderTodo = (todos: Todo[]) => {
  todosContainer.innerHTML = ``;
  todos.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id);
  });
};

// generate todo items
const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  let div = <HTMLDivElement>document.createElement("div");
  div.className = "todo";

  //checkbox
  const checkBox = <HTMLInputElement>document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    para.className = checkBox.checked ? "textcut" : "";
    let indx = todos.findIndex((item) => item.id === id);
    todos[indx].isCompleted = true;
  };
 
  //  paragraph todo
  let para = <HTMLParagraphElement>document.createElement("p");
  para.className = isCompleted ? "textcut" : "";
  para.innerText = title;

  // delete button
  const deleteBtn = <HTMLButtonElement>document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.className = "deleteBtn";
  deleteBtn.onclick = () => {
    deletefunc(id);
  };

  // appending
  div.append(checkBox, para, deleteBtn);
  todosContainer.append(div);
};

const deletefunc = (id: string) => {
  const idx = todos.findIndex((item) => item.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};
