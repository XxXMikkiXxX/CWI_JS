console.log(`Trabalhando com listas`);

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);

//array

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`

);

listasDeDestinos.push( `Brasília`); //adicionado item ao Array
console.log(listasDeDestinos)


listasDeDestinos.splice(1,1) // removendo item do array, posiçao iniciada em 0 e número de elementos a serem excluídos
console.log(listasDeDestinos);

console.log(listasDeDestinos[1]); //imprimir determiandos itens do Array

