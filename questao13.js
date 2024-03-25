/*
Questão 13: Como você pode verificar se um valor está contido em um array
em JavaScript?
*/
RESPOSTA:
let array = [1, 2, 3, 4, 5];
let valor = 3;

if (array.includes(valor)) {
    console.log("O valor está contido no array.");
} else {
    console.log("O valor não está contido no array.");
}