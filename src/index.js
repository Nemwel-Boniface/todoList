import _ from 'lodash'; //eslint-disable-line
import './style.css';

const tasks = [];
const taskWrapper = document.querySelector('.activities');
const newTask = document.querySelector('.newTask');
const addNewTask = document.querySelector('.submit');
const lengt = tasks.length;

function addtodo() {
  console.log('not done');
  let lengt = tasks.length;
  tasks.push({
    description: newTask.value,
    completed: false,
    index: lengt,
  })
  newTask.value = '';
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
  <i class="fas fa-ellipsis-v"></i><br>
`;
  taskWrapper.appendChild(form);
  })
}

addNewTask.addEventListener('click', (e) => {
  e.preventDefault();
  addtodo();
})
