function listTask() {
  const taskButton = document.getElementById("criar-tarefa");
  taskButton.addEventListener("click", createTask);

  function createTask() {
    const inputText = document.querySelector("#texto-tarefa");
    const olTaks = document.querySelector("#lista-tarefas");
    const liTask = document.createElement("li");
    olTaks.appendChild(liTask);
    liTask.innerText = inputText.value;
    inputText.value = "";
  }
}
listTask();
