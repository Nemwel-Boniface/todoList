import _ from 'lodash'; //eslint-disable-line
import './style.css';

let tasks = [];
const taskWrapper = document.querySelector('.activities');
const newTask = document.querySelector('.newTask');
const addNewTask = document.querySelector('.submit');
var removeTask = document.getElementById('removeTask');
const lengt = tasks.length;

// function removetodo(index) {
//   console.log('clicked');
//   this.tasks.splice(index, 1);
//   this.displayTasks();
// }

function addToLocalStorage() {
  localStorage.setItem('myTasks', JSON.stringify(tasks));
}

function getFromLocalStorage() {
  if (localStorage.getItem('myTasks')) {
    tasks = JSON.parse(localStorage.getItem('myTasks'));
  }
  displayTasks();
}
function addtodo() {
  let lengt = tasks.length;
  tasks.push({
    description: newTask.value,
    completed: false,
    index: lengt,
  })
  newTask.value = '';
  addToLocalStorage(tasks);
  displayTasks();
  console.log(tasks);
}

function displayTasks() {
  let form = document.createElement('form');
  form.classList.add('atask');
  tasks.forEach((description, index) => {
  form.innerHTML = `
  <input type="checkbox" id="${tasks[index].index}" ${tasks[index].completed ? 'checked' : ''} name="task" value="task">
  <label for="${tasks[index].index}">${tasks[index].description}</label>
  <i id="removeTask" class="fas fa-ellipsis-v"></i><br>
`;

  // removeTask.addEventListener('click', () => {
  //   console.log('todo runs');
  //   this.removetodo(tasks ,index);
  //   displayTasks();
  // });
  taskWrapper.appendChild(form);
  })
}

addNewTask.addEventListener('click', (e) => {
  e.preventDefault();
  addtodo();
})

document.addEventListener('DOMContentLoaded', () => {
  getFromLocalStorage();
});
