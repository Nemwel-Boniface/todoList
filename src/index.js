import _ from 'lodash'; //eslint-disable-line
import './style.css';

const tasks = [
  {
    description: 'Buy groceries',
    completed: true,
    index: 0,
  },
  {
    description: 'Clean the House',
    completed: false,
    index: 1,
  },
  {
    description: 'Water the Flowers',
    completed: true,
    index: 2,
  },
];

const newTask = document.querySelector('.newTask');

const addNewTask = document.querySelector('.submit');
let lengt = tasks.length;

function addtodo() {
  console.log('not done');
  let lengt = tasks.length;
  tasks.push({
    description: newTask.value,
    completed: false,
    index: lengt,
  })

  displayTasks();
  console.log(tasks);
}

addNewTask.addEventListener('click', (e) => {
  e.preventDefault();
  addtodo();
})
