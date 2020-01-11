// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.


addTask = () => {
  // add event listener on form through submit button
  let form = document.getElementById('create-task-form')
  form.addEventListener("submit", function() {
    event.preventDefault()
    console.log("submitter btn clicked")

    // create a new list element 
    // create a new delete button
    let newListItem = document.createElement('li')
    let deleteButton = document.createElement('button')
    
    //set display of delete button
    deleteButton.innerText = "x"

  // DELETING THE TASK
    //add event listener to delete button to remove the whole li element (the parent)
    deleteButton.addEventListener("click", function() {
      this.parentNode.remove()
    })

  // ADDING THE TASK
    // select form input field (1st item in the form) and make the inner text of the newly create li element = value that user inputs
    let inputForm = document.querySelector('form')
    newListItem.innerText = inputForm[0].value

    //append new element to #list
    //findElementById #list
    let toDoList = document.getElementById('tasks')
    toDoList.appendChild(newListItem)
    newListItem.appendChild(deleteButton)

    // clear input field at end of each "submit"
    inputForm[0].value = ""
  })
}

//run the addTask function after the dom has loaded
document.addEventListener("DOMContentLoaded", () => {
  addTask()
} )


















































// function addTask() {
//   let inputs = document.querySelectorAll("form input");
//   inputs[1].addEventListener("click", function() {
    
//     event.preventDefault();


//     if (inputs[0].value.length > 0) {
//       let newListItem = document.createElement('li');
      
//       let deleteButton = document.createElement("button");
//       deleteButton.innerText = "x";

//       newListItem.innerText = inputs[0].value;
//       // let todoList = document.getElementById('tasks');

//       let formSelect = document.querySelector("form select")
//       newListItem.style.color = formSelect.value;
      
//       newListItem.appendChild(deleteButton)

    
//       if (formSelect.value == 'green') {
//         document.getElementById('greenList').appendChild(newListItem);
//       } else if (formSelect.value == 'orange') {
//         document.getElementById('orangeList').appendChild(newListItem);
//       } else {
//         document.getElementById('redList').appendChild(newListItem);
//       }
      

     
//       deleteButton.addEventListener('click', function(){
//         newListItem.remove();
//       })

//       inputs[0].value ="";
//     }
//   });
  
// }

// function addPriority() {
//   let dropPriority = document.createElement('select')
//   dropPriority.appendChild(new Option("low", "green"));
//   dropPriority.appendChild(new Option("medium", "orange"));
//   dropPriority.appendChild(new Option("high", "red"));
//   document.getElementById('create-task-form').appendChild(dropPriority)
  
//   let todoList = document.getElementById('list');

//   let redList = document.querySelector('#tasks');
//   redList.id = "redList";
//   redList.style.margin = "0px";

//   let orangeList = document.createElement('ul');
//   orangeList.id = "orangeList";
//   orangeList.style.margin = "0px";
//   todoList.appendChild(orangeList);

//   let greenList = document.createElement('ul');
//   greenList.id = "greenList";
//   greenList.style.margin = "0px";
//   todoList.appendChild(greenList);
//   // if (newListItem.id == "red")
//   //   appendChild 
// }


// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   addPriority();
//   addTask(); 
  
// });
