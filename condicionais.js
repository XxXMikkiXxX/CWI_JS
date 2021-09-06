console.log(`Trabalhando com condicionais`);

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`
//console.log(salvador, saoPaulo, rioDeJaneiro);

//array

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`

);
console.log(listasDeDestinos)
const idadeComprador = 15;

if (idadeComprador >= 18){
    console.log("Comprador maior de idade")
    listasDeDestinos.splice(1,1); // remover se for maior de idade
} else{
    console.log("Não é permitida a compra de passagens por menores de idade");
}

console.log(listasDeDestinos);


