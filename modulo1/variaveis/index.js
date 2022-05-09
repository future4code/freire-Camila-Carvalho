/*
Excercícíos de interpretação de código
Questão 1:

let a = 10
let b = 10
console.log(b)
Resposta: Irá imprimir o valor de b que é igual a 10.

b = 5
console.log(a, b)
Resposta: Irá imprimir o valor de 10 igual a 10 e de b igual a 5.

Questão 2:
let a = 10
let b = 20
c = a  // c = 10
b = c  // b = 10
a = b  // a = 10
console.log(a, b, c)
Resposta: Irá imprimir os valores 10, 10 , 10.
*/


/*
//Questão 3:
Programa utilizado para calcular o valor de horas trabalhadas.
É solicitado que o uusuário insira o valor de horas trabalhadas ao dia.
E o valor da hora trabalhada. Para por fim, realizar o cálculo.

let horaDeTrabalho = prompt ("Quantas horas você trabalha por dia?")
let ValorDia = prompt ("Quanto você recebe por dia?")
alert('Voce recebe ${t/p} por hora')

*/

/*
Exercício de Escrito de Código
Exercício 1
*/
/*
nome = 
console.log(typeof nome)

idade = 
console.log(typeof idade)

//Retornou um undefined pois não foi atribuido valor.
//Está dando erro de falta de argumento, e as variáveis são do tipo "undefined", pois não foi atribuido valor.
*/

let nome = (prompt("qual é o seu nome?"))

let idade = (prompt("Qual a sua idade?"))
console.log("Olá", nome, "você tem", idade, "anos!!")

//..........................................................

// 2 - 
let pizza = ("Você gosta de pizza?")
let roupaAzul = ("Você está usando roupa azul?")
let gostaDeGato = ("Você gosta de gatos?")

let respostaPizza = ("sim")
let respostaRoupa = ("não")
let respostaGato = ("não")

console.log(pizza, respostaPizza)
console.log(roupaAzul, respostaRoupa)
console.log(gostaDeGato, respostaGato)

//...........................................................

// 3- 
let a = 10
let b = 25

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//............................................................

// - Desafio Extra
let numero1 = (prompt("digite o primeiro número"))
let numero2 = (prompt("digite o segundo número"))

let numeroSoma = Number(numero1)
let numeroSoma2 = Number(numero2)
let multiplicaSoma = Number(numero1 * numero2)

let soma = (numeroSoma + numeroSoma2)
console.log("O primeiro número somado ao segundo número resulta em: ", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em: ", multiplicaSoma )
































