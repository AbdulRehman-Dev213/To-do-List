const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-list");
const todoBox = document.querySelector("#todo-Lists");
let editTodo = null;
function addTodo() {
  let task = todoInput.value.trim();
  if (task === "") {
    return;
  }
  if (editTodo !== null) {
    const span = editTodo.querySelector("span");
    span.textContent = task;

    editTodo = null;
    todoInput.value = "";
    return;
  }

  const todoList = document.createElement("li");
  todoList.innerHTML = `
       <div class="task">
         <input type="checkbox" name="checkbox" class="checkbox">
          <span>${task}</span>
         </div>
         <div class="todo-actions">
            <button class="edit-todo"> <i class="fa-solid fa-pencil"></i></button>
            <button class="remove-todo"> <i class="fa-solid fa-trash"></i></button>
            </div>
  
    `;

  todoBox.appendChild(todoList);
  todoInput.value = "";

  todoList.querySelector(".remove-todo").addEventListener("click", () => {
    todoList.remove();
  });

  todoList.querySelector(".edit-todo").addEventListener("click", () => {
    editTodo = todoList;
    todoInput.value = todoList.querySelector("span").textContent;
  });
  const checkbox = todoList.querySelector(".checkbox");

  checkbox.addEventListener("change", () => {
    const button = todoList.querySelector(".edit-todo");
    button.disabled = checkbox.checked;
  });
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
