import _ from 'lodash'; //eslint-disable-line
import './style.css';

let tasks = [];
const taskWrapper = document.querySelector('.activities');
const newTask = document.querySelector('.newTask');
const addNewTask = document.querySelector('.submit');
const removeTask = document.getElementById('removeTask');
const lengt = tasks.length;

function addToLocalStorage() {
  localStorage.setItem('myTasks', JSON.stringify(tasks));
}

function getFromLocalStorage() {
  if(localStorage.getItem('myTasks')) {
    tasks = JSON.parse(localStorage.getItem('myTasks'));
  }
  return tasks;
}

function displayTasks() {
  taskWrapper.innerHTML = '';
  let mylocal = getFromLocalStorage();

  mylocal.forEach((tsk, index) => {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    if(tasks.checked){
      checkbox.setAttribute('checked','checked');
    }
    checkbox.addEventListener('change',()=>onchange(tasks));
    // li.appendChild(checkbox);
    const taskDesc = document.createElement('span');
    taskDesc.innerHTML = tsk.description;
    // li.appendChild(taskDesc);
    // const editbtn = document.createElement('button');
    // editbtn.onclick = () => editDescription(todos);
    const icon = document.createElement('i');
    icon.classList.add('fas','fa-ellipsis-v');
    // button.appendChild(icon);
    // li.appendChild(icon);
    li.append(checkbox, taskDesc, icon);
    taskWrapper.appendChild(li);
  })
}

function addToTasks() {
  tasks.push({
    checked: false,
    description: newTask.value,
    index: lengt,
  })
  newTask.value = '';
  addToLocalStorage();
  displayTasks();
  console.log(tasks)
}

addNewTask.addEventListener('click', (e) => {
  e.preventDefault();
  addToTasks();
})

document.addEventListener('DOMContentLoaded', () => {
  getFromLocalStorage();
  displayTasks();
  console.log(tasks);
})
