// OPERADORES LÓGICOS
// Parte I - Exercícios de Interpretação de Código

// 1 -
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2
console.log("a. ", resultado)
//true && false = a. false

resultado = bool1 && bool2 && bool3
console.log("b. " , resultado)
//true && false && true -> false && false = b. false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)
//resultado = !resultado && (true || false)
//resultado = true &&  (true)
//resultado = true && true
//resultado = c. true 

console.log("d. ", typeof resultado)
// o typeof irá informar que se trata de um boolen (true, false)
*/
//............................................................................................

// 2 - 
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//Será impresso no console o valor do primeioNumero concatenado com o valor do segundoNumero.
//É necessário informar que e trata de um Number para que a soma ocorra de fato.
*/
// ................................................................................................

// 3 - 
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

let somaPrimeiro = Number(primeiroNumero)
let somaSegundo = Number(segundoNumero)

const soma = (somaPrimeiro + somaSegundo)
console.log(soma)
*/

//..............................................................................

// Parte II - Exercícios de Escrita de Código

// 1 - 

let idadeUsuario = prompt("Digite a sua idade: ")
let idadeAmigo = prompt("Qual a idade de seu(a) melhor amigo(a)?")

const idade = idadeUsuario > idadeAmigo

console.log("Sua idade é maior que a do seu(a) melhor amigo(a)?", idade)

console.log(idadeUsuario - idadeAmigo)


//...................................................................................

// 2 - 

let = numeroPar = prompt("Insira um número par ")
let par = numeroPar % 2 == 0
console.log("Esse é um número par", par)

let naopar = numeroPar % 2 != 0
console.log ("Esse é um número impar")

// .............................................................................................

// 3 -

let idade = prompt("qual a sua idade?")

let idadeMes = idade * 12
console.log("Sua idade em meses é: ", idadeMes)

let idadeDias = idade * 365
console.log("Sua idade em dias é: ", idadeDias)

let idadeHoras = idade * 8760
console.log("Sua idade em horas é: ", idadeHoras)


//........................................................................................

// 4 - 
let primeiroNumero = prompt("Digite o primeiro número")

let segundoNumero = prompt("Digite o segundo número ")

console.log( primeiroNumero > segundoNumero)
console.log( primeiroNumero === segundoNumero)
console.log( primeiroNumero / segundoNumero)
console.log( segundoNumero > primeiroNumero)



