
let createTask = document.getElementById("create-task-form")
let newInput = document.createElement("input")
newInput.id = "new-task-due"
newInput.placeholder = "due date"

//createTask.appendChild(newInput)

createTask.prepend(newInput)

let taskDescription = document.getElementById("new-task-description")



function addTask(task, date){
  let taskList = document.getElementById("tasks");
  let li = document.createElement("li");
  let listButton = document.createElement("button");
  let editButton = document.createElement("button")
  
  editButton.innerText = "Edit"
  listButton.innerText = "x"
  li.textContent = `${task} - ${date}`
  let textColor = document.querySelector("select")
  li.style.color = textColor.value

  taskList.appendChild(li);
  taskList.appendChild(listButton);
  taskList.appendChild(editButton);

  editButton.addEventListener("click", function(){
    let editInput = document.createElement("input")
    editInput.value = li.innerText
    let submitEditButton = document.createElement("button")
    submitEditButton.textContent = "Save"
    li.appendChild(submitEditButton)
    li.appendChild(editInput)
    submitEditButton.addEventListener("click", function(e){
      li.innerText = editInput.value
    })

  });

  listButton.addEventListener("click", function(){
    li.remove();
    listButton.remove();
    editButton.remove()
  })
};

function submitTask(event){
  console.log(event)
  let newDescription = event.target['new-task-description'].value
  let newDueDate = event.target['new-task-due'].value
  addTask(newDescription, newDueDate)
}








document.addEventListener("DOMContentLoaded", () => {
  let createTask = document.getElementById("create-task-form")
  createTask.addEventListener("submit", function(){
    event.preventDefault();
    submitTask(event)
  })
});
