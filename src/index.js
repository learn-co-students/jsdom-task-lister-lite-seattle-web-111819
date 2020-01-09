



function addTask(newTask) {
  let newTaskItem = document.createElement("li");
  newTaskItem.id = newTask.toLowerCase();
  newTaskItem.innerText = newTask;
  

  
    // newTaskItem.innerHTML = `${newTask}  <a class="delete"> X </a>`;
    document.querySelector("ul").appendChild(newTaskItem);
    console.log(newTaskItem);




  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete"
  newTaskItem.appendChild(deleteButton);

  // DELETE BUTTON ALTERNATIVE
  // deleteTask = e => {
  //   e.target.parentNode.remove();
  //   // each li's delete button has its own parentNode
  //   // delete by parentNode is less more efficient and less tedious than by id
  // }


  document.getElementById(newTask.toLowerCase()).addEventListener("click", function() {
    newTaskItem.remove();
    console.log("click");
  })
}

// ADD PRIORITY COLOR TO TASK ITEM
// let prioritySetting = document.getElementById("priority").value;
// // console.log(prioritySetting)
// switch (prioritySetting) {
//     case "high":
//         newTaskItem.style.color = "red";
//         newTaskItem.id = "1"; //id is used to sort by priority; Using class is ok too
//         break;
//     case "medium":
//         newTaskItem.style.color = "yellow";
//         newTaskItem.id = "2";
//         break;
//     case "low":
//         newTaskItem.style.color = "green";
//         newTaskItem.id = "3";
//         break;
//         default:
//         // newTaskItem.style.color = "green";
// }


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // let submitButton = document.getElementById("submit-button");
  // submitButton.addEventListener('click', function(event) {
  //   event.preventDefault();
  //   console.log("testing");
  // })
  let taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(event.target["new-task-description"].value);

    // Clears input field after submit
    taskForm.reset();

    // // newLi.innerText = newTask;
    // newLi.innerHTML = `${newTask} | <a class='delete' href="">X</a>`;
    // listUl.appendChild(newLi);
    // // console.log(listUl);
    // newLi.querySelector(".delete").addEventListener("click", function(){
    //   newLi.remove();
});
});