import { addToLocalStorage, tasks } from '../index.js'; //eslint-disable-line

const setState = (checkbox, index) => {
  if (checkbox.checked) {
    tasks[index].checked = true;
    addToLocalStorage();
  } else {
    tasks[index].checked = false;
    addToLocalStorage();
  }
};

export default setState;