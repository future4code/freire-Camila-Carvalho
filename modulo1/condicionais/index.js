//Exercício de Interpretação de Código

// 1. Leia o código abaixo:
    
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)
    
//     if (numero % 2 === 0) {
//       console.log("Passou no teste.")
//     } else {
//       console.log("Não passou no teste.")
//     }

    
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// c) Para que tipos de números a mensagem é "Não passou no teste"? 

//resposta: imprime se o numero for par
//....................................................................................

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//      // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
   
//     a) Para que serve o código acima?
// Resposta: Informar o valor dass frutas cadastradas.
   
//     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// Resposta: 2.25

//     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Resposta: 5


// 3. Leia o código abaixo:
    
// const numero = Number(prompt("Digite o primeiro número."))
// if(numero > 0) {
//     console.log("Esse número passou no teste")
// }
//     let mensagem = ("Essa mensagem é secreta!!!")
// 
// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// Resposta: Verifica se o numero digitado pelo usuário é maior que zero.
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Resposta: "Esse número passou no teste"; Se fosse -10 daria "essa mensagem é secreta" 
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Resposta: Houve erro. A variavel let mensagem não pode estar dentro do bloco "if"

//.........................................................................

//Exercícios de escrita de código
//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// const idade = Number(prompt("Qual é a sua idade?")) 

//     if (idade >= 18){ 
//     console.log("Você pode dirigir")
//     } else{
//         console.log("Você não pode dirigir")
//     }

// .......................................................................

// 2 - 
// let turno = prompt("Qual o turno que você estuda? Utilize M (matutino), V(vespertino ou N(noturno)")
    
// if (turno === "M"){
//     console.log("Bom dia!")
//     }else if (turno === "V"){
//         console.log("Boa tarde")
//     } else {
//         console.log("Boa noite")
//     }

// ......................................................................................................
// 3 - 

// let horarioAula = prompt("Qual o turno que você estuda? Utilize M (matutino), V(vespertino ou N(noturno)").toLowerCase()
// switch(horarioAula){
//     case "m":
//         console.log("Bom dia")
//         break;
//     case "v":
//         console.log("Boa tarde")
//         break;
//     case "n":
//         console.log("Boa noite")
//         break;
//     default:
//         console.log("Turno não encontrado")
//     break
// }
// ............................................................................................

// 4- 
let generoFilme = prompt("Qual o gênero do filme você vai assistir?")
let precoFilme = Number(prompt("Qual o preço do ingresso?"))

    if (generoFilme === "fantasia" && precoFilme  < 15 ) {
        console.log("Bom Filme")
    } else if (generoFilme !== "fantasia" && precoFilme > 15){
        console.log("Escolha outro filme")
}


            


        
   
    




