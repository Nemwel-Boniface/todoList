import _ from 'lodash'; //eslint-disable-line
import './style.css';

const tasks = [
  {
    description: 'Buy groceries',
    completed: false,
    index: 0,
  },
  {
    description: 'Clean the House',
    completed: true,
    index: 1,
  },
  {
    description: 'Water the Flowers',
    completed: true,
    index: 1,
  },
];

const taskWrapper = document.querySelector('.activities');
function displayTasks() {
  taskWrapper.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    taskWrapper.innerHTML += `
    <form class="atask">
      <input type="checkbox" id="${tasks[i].index}" name="task" value="task">
      <label for="${tasks[i].index}">${tasks[i].description}</label>
      <i class="fa fa fa-times"></i><br>
    </form>
    `;
  }
}
window.addEventListener('load', () => {
  displayTasks();
});