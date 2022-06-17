const toDoForm = document.getElementById("todo-form"); // toDo form 변수화
const toDoInput = toDoForm.querySelector("input"); // todo input 변수화
const toDoList = document.getElementById("todo-list"); // todo ul 변수화

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  li.id = toDo.id;

  const span = document.createElement("span");
  span.innerText = toDo.text;

  const btn = document.createElement("button");
  btn.addEventListener("click", deleteToDo);
  btn.innerHTML = `X`;
  li.appendChild(btn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
