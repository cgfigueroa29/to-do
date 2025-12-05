const app = document.querySelector('.app');
const newTaskInputText = document.getElementById('new-task-input-text');
const addTaskBtn = document.getElementById('add-task-btn');
const textarea = document.getElementById('mi-textarea');

let taskList = document.querySelector('.task-list');

newTaskInputText.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});

addTaskBtn.addEventListener('click', () => {
  const taskAsignableId = `task-${Date.now()}`;
  const taskInputText = newTaskInputText.value.trim();

  if (taskInputText !== '') {
    if (!taskList) {
      taskList = document.createElement('div');
      taskList.className = 'task-list';
      app.appendChild(taskList);
    }

    const taskItem = document.createElement('div');
    const taskItemText = document.createElement('span');
    const taskBtnsContainer = document.createElement('div');
    const editTaskBtn = document.createElement('button');
    const deleteTaskBtn = document.createElement('button');

    taskItem.id = taskAsignableId;

    taskItem.className = 'task-item';
    taskItemText.className = 'task-item-text';
    taskBtnsContainer.className = 'task-btns-container';
    editTaskBtn.className = 'edit-task-btn';
    deleteTaskBtn.className = 'delete-task-btn';

    taskItemText.textContent = taskInputText;
    editTaskBtn.textContent = 'Edit';
    deleteTaskBtn.textContent = 'Del';

    taskItem.appendChild(taskItemText);
    taskItem.appendChild(taskBtnsContainer);
    taskBtnsContainer.appendChild(editTaskBtn);
    taskBtnsContainer.appendChild(deleteTaskBtn);

    taskList.prepend(taskItem);

    newTaskInputText.value = '';
    newTaskInputText.style.height = 'auto';

    editTaskBtn.addEventListener('click', () => {
      const originalTaskInputText = editTaskBtn.parentElement.parentElement.querySelector('.task-item-text').textContent;
      const editTaskModal = document.createElement('div');
      const editingTaskInput = document.createElement('textarea');
      const editingTaskInputBtnsContainer = document.createElement('div');
      const cancelUpdateTaskBtn = document.createElement('button');
      const updateTaskBtn = document.createElement('button');

      editTaskModal.className = 'edit-task-modal';
      editingTaskInput.className = 'editing-task-input';
      editingTaskInputBtnsContainer.className = 'editing-task-input-btns-container';
      updateTaskBtn.className = 'update-task-btn';
      cancelUpdateTaskBtn.className = 'cancel-update-task-btn';

      updateTaskBtn.textContent = 'Update';
      cancelUpdateTaskBtn.textContent = 'Cancel';

      editingTaskInput.rows = '1';
      editingTaskInput.value = originalTaskInputText;
      editingTaskInput.contentEditable = true;

      editingTaskInput.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
      });

      editTaskModal.appendChild(editingTaskInput);
      editTaskModal.appendChild(editingTaskInputBtnsContainer);
      editingTaskInputBtnsContainer.appendChild(updateTaskBtn);
      editingTaskInputBtnsContainer.appendChild(cancelUpdateTaskBtn);
      document.body.appendChild(editTaskModal);

      setTimeout(() => {
        editingTaskInput.style.height = 'auto';
        editingTaskInput.style.height = editingTaskInput.scrollHeight + 'px';
      }, 0);

      updateTaskBtn.addEventListener('click', () => {
        taskItemText.textContent = editingTaskInput.value;
        editingTaskInput.value = '';
        document.body.removeChild(editTaskModal);
      });

      cancelUpdateTaskBtn.addEventListener('click', () => {
        document.body.removeChild(editTaskModal);
      });
    });

    deleteTaskBtn.addEventListener('click', () => {
      taskList.removeChild(taskItem);

      if (taskList.children.length === 0) {
        app.removeChild(taskList);
        taskList = null;
      }
    });
  }
});
