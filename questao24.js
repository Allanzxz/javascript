/*
Questão 24: Como você pode adicionar um evento de clique a um elemento
HTML em JavaScript?
*/
RESPOSTA:
<button id="meuBotao">Clique aqui</button>
//
// Seleciona o botão pelo ID
let botao = document.getElementById('meuBotao');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    alert('Você clicou no botão!');
});
