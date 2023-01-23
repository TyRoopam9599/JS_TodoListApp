const taskInput = document.getElementById('task-input');
const descTask = document.getElementById('desc-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addTaskBtn.addEventListener('click', function() {
  if (!taskInput.value) return;
  if (!descTask.value) return;

  let work = {
    task: taskInput.value ,
    desc: descTask.value
  }
  tasks.push(work) ;
  renderTasks();

  taskInput.value = '';
  descTask.value = '';
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(function(task, index) {
    console.log(task.desc)
    const li = document.createElement('li');
    li.innerHTML = `
        <div id="container">
          <p id="main-task">${task.task}</p>
          <p id="desc" style='text-align:center; padding:10px;'>${task.desc}</p>
        </div>
        <button class="delete-btn" data-index="${index}">X</button>`;
    taskList.appendChild(li);
  });

  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const index = btn.getAttribute('data-index');
      tasks.splice(index, 1);
      renderTasks();
    });
  });
}