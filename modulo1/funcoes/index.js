//FUNCOES
//Exercícios de interpretação de código
// 1 -
/*
//a)
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))  // 10
console.log(minhaFuncao(10)) // 50
*/

//b)
/*
// Ao remover o console.log e inserir o return, não aparece nada.
// Não é possivel fazer o return

function minhaFuncao(variavel) {
	return variavel * 5
}
    return minhaFuncao(2)
    return minhaFuncao(10)

*/
//............................................................

// 2 - 
/*
// a) 
//Resposta: Torna o texto que foi inserido em letras minúsculas. 
// Considera verdadeiro toda entrada inserida pelo usuário que contenha a palavra "cenoura".
// É útil para inserção de dados importantes, evitando erros de digitação do usuário.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


// b)
i.   Eu gosto de cenoura // true
ii.  CENOURA é bom pra vista // true
iii. Cenouras crescem na terra // true
*/

//..............................................................................................

// Exercícios de escrita de código

// 1 - 
// a)
function saudar (){
    let frase = `Eu sou Camila, tenho 35 anos, moro em Natal, e sou estudante`
return frase 
}
let resultado = saudar()
console.log (resultado)


// b - 
function imprimir(){
    const nome = "Camila"
    const idade = "30"
    const cidade = "Natal"
    const profissao = "estudante"  

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    return imprimir
}
const saudacao = (imprimir())


// ...........................................................................................

// 2 -  

// a)

function somarDoisNumeros(num1, num2){
const soma = num1+num2
const numero1 = prompt("Digite um numero ")
const numero2 = prompt("digite outro numero ")
    return resultado = (soma())
}
    
 

// 3 - 

function operacoes(){
    function soma(){
        soma=num1+num2
    }
    function subtracao(){
        subtracao=num1-num2
    }
    
    function multiplicacao(){
        multiplicacao=num1*num2
    }
    
    function divisao(){
        divisao=num1/num2
    }
}
