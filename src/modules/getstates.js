const setState = (tasks, checkbox, index) => {
  const decre = index - 1;
  if (checkbox.checked) {
    tasks[decre].checked = true;
  } else {
    tasks[decre].checked = false;
  }
};

export default setState;