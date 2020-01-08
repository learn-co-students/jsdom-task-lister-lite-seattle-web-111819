function addTask() {
  let inputs = document.querySelectorAll("form input");
  inputs[1].addEventListener("click", function() {
    event.preventDefault();
    if (inputs[0].value.length > 0) {
      let newListItem = document.createElement('li');
      newListItem.innerText = inputs[0].value;
      let formSelect = document.querySelector('form select')
      newListItem.style.color = formSelect.value;
      let delButton = document.createElement('button');
      delButton.innerText = "X";
      newListItem.appendChild(delButton);
      if (formSelect.value == 'green') {
        document.getElementById('green-tasks').appendChild(newListItem);
      } else if (formSelect.value == 'orange') {
        document.getElementById('orange-tasks').appendChild(newListItem);
      } else {
        document.getElementById('red-tasks').appendChild(newListItem);
      };
      inputs[0].value = "";
      delButton.addEventListener('click', function() {
        newListItem.remove();
      });
    };
  });
}

function addPriority() {
  let prioritySelect = document.createElement('select');
  prioritySelect.appendChild(new Option("low", "green"));
  prioritySelect.appendChild(new Option("medium", "orange"));
  prioritySelect.appendChild(new Option("high", "red"));
  document.getElementById('create-task-form').appendChild(prioritySelect);
  let todoList = document.getElementById('list');
  let redList = document.querySelector('ul');
  redList.id = "red-tasks";
  redList.style['margin-bottom'] = "0px";
  let orangeList = document.createElement('ul');
  orangeList.id = "orange-tasks";
  orangeList.style.margin = "0px";
  todoList.appendChild(orangeList);
  let greenList = document.createElement('ul');
  greenList.id = "green-tasks";
  greenList.style['margin-top'] = "0px";
  todoList.appendChild(greenList);
}

document.addEventListener("DOMContentLoaded", () => {
  addPriority();
  addTask();
});
