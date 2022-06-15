let voce = 0
let amigo = 0

const refrigerante = 11.99
const macarrao = 6.99
const ervilha = 6.99
const arroz = 22.99
const feijao = 11.89
const vinho = 70


const precoRefrigerante = 11.99 * 3
const precoMacarrao = 6.99 * 4 
const precoErvilha = 6.99 * 3
const precoArroz = 22.99 * 3
const precoFeijao = 11.89 * 2
const precoVinho = 70 * 3

let total = parseFloat(precoVinho + precoFeijao + precoArroz + precoErvilha + precoMacarrao + precoRefrigerante)


let metade = total/2


if(total % 2 == 0) {
    voce = (total - precoVinho)/2
    amigo = (total - voce)
    
} else {
    voce = metade
    amigo = metade
    
}

console.log(`O valor total a ser pago é de R$${total}, onde eu vou pagar
R$${voce} reais e o meu amigo irá pagar R$${amigo} reais.`)

// ====================== EXTRA ===============================

let voceVaiPagar = 0
let amigoVaiPagar = 0

let valorRefrigerante = parseFloat(prompt("Digite o preço do refrigerante"))
let quantidadeRefrigerante = parseFloat(prompt("Digite a quantidade de refrigerante"))

let valorMacarrao = parseFloat(prompt("Digite o preço do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Digite a quantidade de macarrão"))

let valorErvilha = parseFloat(prompt("Digite o preço da ervilha"))
let quantidadeErvilha = parseInt(prompt("Digite a quantidade de ervilha"))

let valorArroz = parseFloat(prompt("Digite o preço do arroz"))
let quantidadeArroz = parseInt(prompt("Digite a quantidade de arroz"))

let valorFeijao = parseFloat(prompt("Digite o preço do feijão"))
let quantidadeFeijao = parseInt(prompt("Digite a quantidade de feijão"))

let valorVinho = parseFloat(prompt("Digite o preço do vinho"))
let quantidadeVinho = parseInt(prompt("Digite a quantidade de vinho"))

let totalRefrigerante = valorRefrigerante * quantidadeRefrigerante
let totalMacarrao = valorMacarrao * quantidadeMacarrao
let totalErvilha = valorErvilha * quantidadeErvilha
let totalArroz = valorArroz * quantidadeArroz
let totalFeijao = valorFeijao * quantidadeFeijao
let totalVinho = valorVinho * quantidadeVinho

let totalDasCompras = totalRefrigerante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho

let metadeDasCompras = totalDasCompras/2

if(totalDasCompras % 2 == 0 ){
    voceVaiPagar = (totalDasCompras - totalVinho)/2
    amigoVaiPagar = (totalDasCompras - voceVaiPagar)

} else {
    voceVaiPagar = metadeDasCompras
    amigoVaiPagar = metadeDasCompras

}

alert(`EXTRA: O valor total a ser pago é de R$${totalDasCompras}, onde eu vou pagar
R$${voceVaiPagar} reais e o meu amigo irá pagar R$${amigoVaiPagar} reais.`)