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

