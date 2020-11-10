function criarTarefa() {
 const botaoTarefa = document.getElementById('criar-tarefa');
 botaoTarefa.addEventListener('click', function (){
  let tarefa = document.createElement('li');
   let input = document.getElementById('texto-tarefa');
   tarefa.innerText = input.value;
   tarefa.classList.add('tarefa');
   let lista = document.getElementById('lista-tarefas');   
   lista.appendChild(tarefa);
   input.value = '';
   completaTarefa();
   selecionaTarefa();   
 }) 
 }
criarTarefa();



function selecionaTarefa() {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefas.length; index += 1){
    tarefas[index].addEventListener('click', mudaClasseSelecionada);    
  }
  function mudaClasseSelecionada(event){
    for (let index = 0; index < tarefas.length; index += 1){
      //tarefas[index].className = 'tarefa';
      tarefas[index].classList.remove('selecionada');
      event.target.classList.add('selecionada');
    }  
  }  
}

function completaTarefa(){
  let tasks = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tasks.length; index += 1){
    tasks[index].addEventListener('dblclick', mudaClasseCompleted);
  }
  function mudaClasseCompleted(event){
      event.target.classList.toggle('completed');
    }
}

/*
function completaTarefa() {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefas.length; index += 1){
    tarefas[index].addEventListener('dblclick', mudaClasseCompleted);
  }
  function mudaClasseCompleted(event){
    for (let index = 0; index < tarefas.length; index += 1){
          event.target.classlist.toggle('completed');
    }
  }
}

*/


