
  //your code here
//run the addTask function after the dom has loaded 




// addTask = () => {
// //add event listener on form through submit button 
// let form = document.getElementById('create-task-form')
// form.addEventListener("submit", function() {
//   event.preventDefault()
//   console.log("submit button working")
// //create a new list element 
// //create a new delete button 
// let newListItem = document.createElement('li')
// let deleteButton = document.createElement('button')

// //set display of delete button 
// deleteButton.innerText = "X"
// //DELETING THE TASK 
// //add event listener to delete button to remove the whole li element (the parent  )
// deleteButton.addEventListener("click", function() {
//   this.parentNode.remove()
// })

// // ADDING THE TAsk 
// // select from input field(1st item in the form) and make the inner text of the newly create li element = value that user input
// let inputForm = document.querySelector('form')
// newListItem.innerText = inputForm[0].value

// //append new element to #list 
// //findElementById #list 
// let toDoList = document.getElementById('tasks')
// toDoList.appendChild(newListItem)
// newListItem.appendChild(deleteButton)

// //clear input field at end of each "submit"
// inputForm[0].value = ""
// })
// }
// document.addEventListener("DOMContentloaded", () =>{
//   addTask()
// } )
run the addTask function after the dom has loaded 
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




