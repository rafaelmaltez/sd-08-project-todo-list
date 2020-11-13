function criaHeader() {
  let header = document.createElement('header');
  document.body.appendChild(header);
  header.innerHTML = 'Minha Lista de Tarefas';
}
criaHeader();

function criaParagrafoFuncionamento() {
  let paragrafo = document.createElement('p');
  document.body.appendChild(paragrafo);
  paragrafo.id = 'funcionamento';
  paragrafo.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
}
criaParagrafoFuncionamento();

function criaInput() {
  let input = document.createElement('input');
  document.body.appendChild(input);
  input.type = 'text';
  input.id = 'texto-tarefa';
  input.placeholder = 'item que deseja adicionar';
}
criaInput();

function criaListaTarefas() {
  let lista = document.createElement('ol');
  document.body.appendChild(lista);
  lista.id = 'lista-tarefas';
}
criaListaTarefas()

function criaBotao() {
  let input = document.getElementById('texto-tarefa');
  let botao = document.createElement('button');
  let lista = document.getElementById('lista-tarefas');
  document.body.appendChild(botao);
  botao.id = 'criar-tarefa';
  botao.innerText = 'Adicionar';
  botao.addEventListener('click', function() {
    if (input.value.length > 0) {
      let novoItem = document.createElement('li');
      novoItem.innerText = input.value;
      lista.appendChild(novoItem);
      input.value = '';
    }
  });
}
criaBotao();

function pintaBackground() {
  let lista = document.getElementById('lista-tarefas');
  lista.addEventListener('click', function(evento) {
    evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
pintaBackground();
