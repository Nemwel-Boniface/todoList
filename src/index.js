import _ from 'lodash'; //eslint-disable-line
import './style.css';

let tasks = [];
const taskWrapper = document.querySelector('.activities');
const newTask = document.querySelector('.newTask');
const addNewTask = document.querySelector('.submit');
const removeTask = document.getElementById('removeTask');

// function removetodo(index) {
//   console.log('clicked');
//   tasks.splice(index, 1);
//   displayTasks();
// }

function addToLocalStorage() {
  localStorage.setItem('myTasks', JSON.stringify(tasks));
}

function getFromLocalStorage() {
  if (localStorage.getItem('myTasks') !== null) {
     tasks = JSON.parse(localStorage.getItem('myTasks'));
  }
  return tasks;
}
function addtodo() {
  let lengt = tasks.length;
  tasks.push({
    description: newTask.value,
    completed: false,
    index: lengt,
  })
  newTask.value = '';
  displayTasks();
  addToLocalStorage(tasks);
  // console.log(tasks);
}

function displayTasks() {
  let myVar = '';
  let mylocal = getFromLocalStorage();
  console.log(tasks);
  let ul = document.createElement('ul');
  ul.classList.add('atask');

  mylocal.forEach((tas, index) => {
  myVar += ` <li><input type="checkbox" id="${tasks[index].index}" ${tasks[index].completed ? 'checked' : ''} name="task" value="task"><span>${tas.description}</span> <i id="removeTask" class="fas fa-ellipsis-v"></i><br></li>`;

  // const removeTask = document.getElementById('removeTask');
  // removeTask.addEventListener('click', () => {
  //   console.log('todo runs');
  //   removetodo(index);
  //   // displayTasks();
  // });
   taskWrapper.innerHTML = myVar;
  });
}


addNewTask.addEventListener('click', (e) => {
  e.preventDefault();
  addtodo();
});

document.addEventListener('DOMContentLoaded', () => {
  getFromLocalStorage();
});
console.log(getFromLocalStorage());
displayTasks();
