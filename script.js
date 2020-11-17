document.addEventListener('click', function (event) {
    if (event.target.id === 'criar-tarefa') {
        const list = document.getElementById('lista-tarefas');
        let taskText = document.getElementById('texto-tarefa');
        if (taskText.value != '') {
            let createList = document.createElement('li');
            createList.className = 'task';
            createList.innerHTML = taskText.value;
            list.appendChild(createList);
            taskText.value = '';
        };
    } else if (event.target.classList.contains('task')) {
        let removeSelect = document.getElementsByClassName('selected');
        for (let i = 0; i < removeSelect.length; i += 1) {
            removeSelect[i].classList.remove('selected');
        };
        event.target.classList.add('selected');
    } else if (event.target.id === 'apaga-tudo') {
        document.getElementById('lista-tarefas').innerHTML = '';
    } else if (event.target.id === 'remover-selecionado') {
        if (document.querySelector('.selected') != null) {
            document.querySelector('.selected').remove();
        };     
    } else if (event.target.id === 'remover-finalizados') {
        let removeCompleted = document.getElementsByClassName('completed');
        for (let j = 0; j < removeCompleted.length;) {
            removeCompleted[0].remove();
        };
    } else if (event.target.id === 'mover-cima' && document.getElementsByClassName('selected')[0] != null) {
        let selected = document.getElementsByClassName('selected')[0];
        let previousSibling = document.getElementsByClassName('selected')[0].previousSibling;
        document.getElementById('lista-tarefas').insertBefore(selected, previousSibling);
    } else if (event.target.id === 'mover-baixo' && document.getElementsByClassName('selected')[0] != null) {
        let selected = document.getElementsByClassName('selected')[0];
        let nextSibling = document.getElementsByClassName('selected')[0].nextSibling;
        if (nextSibling != null) {
            document.getElementById('lista-tarefas').insertBefore(nextSibling, selected);
        };
    }
}, false);

document.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else if (event.target.classList.contains('task')) {
        event.target.classList.add('completed');
    };
}, false);

// Fonte do código abaixo: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key#Example
// Pesquisei esse código abaixo para conseguir adicionar itens na lista apertando a tecla "Enter".
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.code) {
      case "Enter":
        document.getElementById('criar-tarefa').click();
        break;
    default:
        return; // Quit when this doesn't handle the key event.      
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
