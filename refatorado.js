// código utilizado antes da refatoração

function corFundoTarefa() {
  const listaOrdenada = document.getElementById('lista-tarefas');

  listaOrdenada.addEventListener('click', (event) => {
    const tarefaSelecionada = document.querySelector('.selecionada');
    if (event.target.className === 'tarefa') {
      if (tarefaSelecionada !== null) {
        tarefaSelecionada.classList.remove('selecionada');
        event.target.classList.add('selecionada');
      }
      event.target.classList.add('selecionada');
    }
  });
}

corFundoTarefa();


function riscarTarefa() {
  const listaOrdenada = document.getElementById('lista-tarefas');

  listaOrdenada.addEventListener('dblclick', (event) => {
    if (event.target.className === 'tarefa completed' || event.target.className === 'tarefa selecionada completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

riscarTarefa();