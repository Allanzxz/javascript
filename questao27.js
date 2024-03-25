/*
Questão 27: Como você pode remover um elemento específico de um array
em JavaScript?
*/
RESPOSTA:
let array = [1, 2, 3, 4, 5];
let elementoParaRemover = 3;

// Encontra o índice do elemento a ser removido
let indice = array.indexOf(elementoParaRemover);

// Se o elemento estiver presente no array, remova-o
if (indice !== -1) {
    array.splice(indice, 1);
}

console.log(array); // O elemento 3 foi removido: [1, 2, 4, 5]
