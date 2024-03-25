/*
Questão 21: Como você pode verificar se um objeto contém uma determinada
propriedade em JavaScript?
*/
RESPOSTA:
let objeto = {
    propriedade: valor
};

if ('propriedade' in objeto) {
    console.log('O objeto contém a propriedade "propriedade".');
} else {
    console.log('O objeto não contém a propriedade "propriedade".');
}
