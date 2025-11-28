const app = document.querySelector('.app');
const newTaskInputValue = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
let taskList = document.querySelector('.task-list');

addTaskBtn.addEventListener('click', () => {

  const taskAsignableId = `task-${Date.now()}`;
  const taskValue = newTaskInputValue.value.trim();

  if (!taskList) {
    taskList = document.createElement('div');
    taskList.className = 'task-list';
    app.appendChild(taskList);
  }

  if (taskValue !== '') {
    const taskItem = document.createElement('div');
    taskItem.id = taskAsignableId;
    taskItem.className = 'task-item';
    taskList.appendChild(taskItem);

    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
    taskContent.textContent = taskValue;

    const deleteTaskBtn = document.createElement('div');
    deleteTaskBtn.className = 'delete-task-btn';
    deleteTaskBtn.textContent = "Delete";

    const editTaskBtn = document.createElement('div');
    editTaskBtn.className = 'edit-task-btn';
    editTaskBtn.textContent = "Edit";

    taskItem.appendChild(taskContent);
    taskItem.appendChild(editTaskBtn);
    taskItem.appendChild(deleteTaskBtn);

    taskList.prepend(taskItem);


    //    newTaskInputValue.value = '';
  }

  editTaskBtn.addEventListener('click', () => {

  })
})

