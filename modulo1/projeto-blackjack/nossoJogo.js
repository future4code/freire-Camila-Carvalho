/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


   console.log("Bem vindos ao jogo Blackjack!")
 
   if(confirm("Quer iniciar uma nova rodada?")) {
    "ok"=== true
   } else {
      "cancelar" === false
      console.log("O jogo acabou")
   }



const naipe = [ "copas", "ouros", "paus", "espadas"]
const numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]


const jogo = (naipe, numero) => {
   selecionarCarta (naipe, numero)
   return `carta${naipe}${numero}`
}
