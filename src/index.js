document.addEventListener("DOMContentLoaded", () => {
  // let submitButton = document.getElementById("submit-button");
  // submitButton.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   console.log("testing");
  // })

  let taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(event.target["new-task-description"].value);

    // // newLi.innerText = newTask;
    // newLi.innerHTML = `${newTask} | <a class='delete' href="">X</a>`;
    // listUl.appendChild(newLi);
    // // console.log(listUl);
    // newLi.querySelector(".delete").addEventListener("click", function(){
    //   newLi.remove();

});
});

function addTask(newTask) {
  let newTaskItem = document.createElement("li");
  newTaskItem.id = newTask.toLowerCase();
  newTaskItem.innerText = newTask;
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete"
  newTaskItem.appendChild(deleteButton);
  // newTaskItem.innerHTML = `${newTask}  <a class="delete"> X </a>`;
  document.querySelector("ul").appendChild(newTaskItem);
  console.log(newTaskItem);

  document.getElementById(newTask.toLowerCase()).addEventListener("click", function() {
    newTaskItem.remove();
    console.log("click");

  })
}