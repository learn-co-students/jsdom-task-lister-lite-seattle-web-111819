function addTask() {
  let inputs = document.querySelectorAll("form input");
  inputs[1].addEventListener("click", function() {
    
    event.preventDefault();


    if (inputs[0].value.length > 0) {
      let newListItem = document.createElement('li');
      
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "x";

      newListItem.innerText = inputs[0].value;
      // let todoList = document.getElementById('tasks');

      let formSelect = document.querySelector("form select")
      newListItem.style.color = formSelect.value;
      
      newListItem.appendChild(deleteButton)

    
      if (formSelect.value == 'green') {
        document.getElementById('greenList').appendChild(newListItem);
      } else if (formSelect.value == 'orange') {
        document.getElementById('orangeList').appendChild(newListItem);
      } else {
        document.getElementById('redList').appendChild(newListItem);
      }
      

     
      deleteButton.addEventListener('click', function(){
        newListItem.remove();
      })

      inputs[0].value ="";
    }
  });
  
}

function addPriority() {
  let dropPriority = document.createElement('select')
  dropPriority.appendChild(new Option("low", "green"));
  dropPriority.appendChild(new Option("medium", "orange"));
  dropPriority.appendChild(new Option("high", "red"));
  document.getElementById('create-task-form').appendChild(dropPriority)
  
  let todoList = document.getElementById('list');

  let redList = document.querySelector('#tasks');
  redList.id = "redList";
  redList.style.margin = "0px";

  let orangeList = document.createElement('ul');
  orangeList.id = "orangeList";
  orangeList.style.margin = "0px";
  todoList.appendChild(orangeList);

  let greenList = document.createElement('ul');
  greenList.id = "greenList";
  greenList.style.margin = "0px";
  todoList.appendChild(greenList);
  // if (newListItem.id == "red")
  //   appendChild 
}


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addPriority();
  addTask(); 
  
});
