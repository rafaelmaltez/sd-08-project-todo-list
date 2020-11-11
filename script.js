const getButton = document.getElementById('criar-tarefa');
const getOrderedList = document.getElementById('lista-tarefas');
const getTaskList = document.getElementsByClassName('task-list');

function createTaskList() {
  const getInput = document.getElementById('texto-tarefa');
  getButton.addEventListener('click', () => {
    const createList = document.createElement('li');
    createList.innerText = getInput.value;
    createList.className = 'task-list';
    getOrderedList.appendChild(createList);
    getInput.value = '';
  });
}
createTaskList();

function selectList() {
  getOrderedList.addEventListener('click', (event) => {
    for (let i = 0; i < getTaskList.length; i += 1) {
      getTaskList[i].classList.remove('selected');
      event.target.classList.add('selected');
      getTaskList[i] = event.target;
    }
  });
}
selectList();
