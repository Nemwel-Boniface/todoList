import _ from 'lodash'; //eslint-disable-line
import './style.css';

let tasks = [];
const taskWrapper = document.querySelector('.activities');
const newTask = document.querySelector('.newTask');
const addNewTask = document.querySelector('.submit');

const addToLocalStorage = () => {
  localStorage.setItem('myTasks', JSON.stringify(tasks));
};

const getFromLocalStorage = () => {
  if (localStorage.getItem('myTasks')) {
    tasks = JSON.parse(localStorage.getItem('myTasks'));
  }
  return tasks;
};

const rmvTask = (index) => {
  const mylocal = getFromLocalStorage();
  mylocal.splice(index, 1);
  for (let i = index; i < mylocal.length; i += 1) {
    mylocal[i].index = mylocal[i].index -= 1; //eslint-disable-line
  }
  addToLocalStorage();
  displayTasks(); //eslint-disable-line
};

const editTask = (desc, index) => {
  tasks[index].description = desc;
  addToLocalStorage();
};

const displayTasks = () => {
  taskWrapper.innerHTML = '';
  const mylocal = getFromLocalStorage();

  mylocal.forEach((tsk) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if (tasks.checked) {
      checkbox.setAttribute('checked', 'checked');
    }
    checkbox.addEventListener('change', () => onchange(tasks));

    const taskDesc = document.createElement('input');
    taskDesc.classList.add('todotask');
    taskDesc.value = tsk.description;

    const deleteTask = document.createElement('i');
    taskDesc.addEventListener('change', (e) => {
      e.preventDefault();
      editTask(e.target.value, tsk.index);
    });
    deleteTask.classList.add('fas', 'fa-ellipsis-v');
    deleteTask.addEventListener('click', () => {
      rmvTask(tsk.index);
    });

    li.append(checkbox, taskDesc, deleteTask);
    taskWrapper.appendChild(li);
  });
};

const addToTasks = () => {
  const lengt = tasks.length;
  tasks.push({
    checked: false,
    description: newTask.value,
    index: lengt,
  });
  newTask.value = '';
  addToLocalStorage();
  displayTasks();
};

addNewTask.addEventListener('click', (e) => {
  e.preventDefault();
  addToTasks();
});

document.addEventListener('DOMContentLoaded', () => {
  getFromLocalStorage();
  displayTasks();
});
