import { addToLocalStorage, tasks } from "../index.js";

export const setState = (checkbox, index) => {
  if (checkbox.checked) {
    tasks[index].checked = true;
    addToLocalStorage();
  } else {
    tasks[index].checked = false;
    addToLocalStorage();
  }
};