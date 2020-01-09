document.addEventListener("DOMContentLoaded", () => {

// 1. select input feild
    let form = document.getElementById('create-task-form')
// 2. add event listener
    form.onsubmit = (e) => {     //--> form.addEventListener('submit', function(event)) {     will take in that event
// 3. check the event in console   console.log(e) 
// the default action of a form is to refresh imed. add a preventDefa...
// will always call target.sjdflajs.sjf
    // e.preventDefault();
// add new task
        addTask(e);
//

    }
});

// create new function for adding a task
addTask = (e) => {
    e.preventDefault();
    // target thing in box, figure out where the item is that we need to 
};

// target task list
// declare whatev gonna be adding to it let listItem = document.createElement('li')
// set what the pretenent info is - listItem.innerText = e.target[0].value;----> [0] task-description
// create button: Delete button     let deleteButton = doc.createEl("button"); deletebut.innerText = "delete"; deleteBu.onclick = e=> {deleteTask(e)}   pass that event into the delete function
//at the very bottom do all the appends in the reverse order.
//              listItem.apendChild.(deleteBut);
//              taskList.appenChil(listItem)
//  DELETE parentNode.
        deleteTask = e => {
            e.target.parentNode.remove()        // currently the id=1, so will need to find by id, JUST taget the parentNode cuz
        }



sortList = () => {          // cannot call anything on an HTMLCollection
    let tasks = Array.from(document.getElementById("tasks").childeren); //call something tasks & make an array for it
    let sorted = tasks.sort((a,b) => a.id - b.id );     //look at 2 item in this arr & compare them based on the evaluation passed in block. if a.id is bigger than b.id
    let taskList = document.getElementById('tasks');

    sorted.forEach(task => {  //for each indv task we are going to do this
        let newTask = task;
        taskList.appendChild(newTask);
    })
}

//switch look at this thing(prioritySetting) and do this
// if prioritySetting is high, set the color to red. case:high, listitem.style.colro: red
//switch statements always need a default. can write null and nothing will happen.
//          listItem.style.color = "aqua"
// before JS sets an input will set a color to it

// let sortButton = document.getElbyId("sort-button"){
    sort.onclick
}