function addTarefa(text) {
  // Cria o Span e a div da Tarefa

  const liNew = document.createElement('li');
  liNew.innerHTML = text;

  const lista = document.querySelector('#lista-tarefas');
  lista.appendChild(liNew);


  liNew.addEventListener('click', function (item) {
    // Funçao que altera a cor do item caso selecionado
    const checkSelected = document.querySelector('.selected');
    if (checkSelected) {
      checkSelected.className = '';
      checkSelected.style.backgroundColor = '';
    }
    item.target.style.backgroundColor = 'rgb(128 , 128 , 128)';
    item.target.className = 'selected';
  });
}

document.querySelector('#criar-tarefa').addEventListener('click', function () {
  // Adicionar nova Tarefa
  const textInput = document.querySelector('#texto-tarefa');
  const texto = textInput.value;
  if (textInput === null || textInput === '') {
    return alert('Favor Preencher com alguma Tarefa.');
  }
  textInput.value = '';
  return addTarefa(texto);
});
const btnDel = document.createElement('button');
btnDel.id = 'apaga-tudo';
btnDel.innerHTML = 'Apagar Tudo';
btnDel.addEventListener('click', function () {
  const olList = document.querySelector('#lista-tarefas');
  const liLista = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < liLista.length; i += 1) {
    olList.removeChild(liLista[i]);
  }
});
document.body.appendChild(btnDel);

const btnDelFinish = document.createElement('button');
btnDelFinish.id = 'remover-finalizados';
btnDelFinish.innerHTML = 'Remover Finalizados';
btnDelFinish.addEventListener('click', function () {
  const olList = document.querySelector('#lista-tarefas');
  const liLista = document.querySelectorAll('.completed');
  for (let i = 0; i < liLista.length; i += 1) {
    olList.removeChild(liLista[i]);
  }
});
document.body.appendChild(btnDelFinish);
