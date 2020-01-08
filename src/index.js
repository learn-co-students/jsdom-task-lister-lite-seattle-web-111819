document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  document.querySelector("form").addEventListener("submit", function() {
    console.log("submit");
    event.preventDefault();
    addTask(event);
    // textColor();
});

});

function addTask(task) {
  console.log(task.target.children[2].value)
  let newTask = document.getElementById("new-task-description");

  newTask = document.createElement("li");
  newTask.innerText = `${task.target.children[1].value}`
  let deleteButton = document.createElement("button")
  deleteButton.innerText = 'Delete'
  document.querySelector("ul").appendChild(newTask);
  newTask.appendChild(deleteButton)
  


  newTask.addEventListener("click", function() {
    newTask.remove()
  });

}

let colorSelect = document.getElementById('colors')
