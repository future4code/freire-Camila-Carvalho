// Exercícios de interpretação de código


// 1 - 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a) 
// 0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
// 1: {nome: 'Laís Petra', apelido: 'Laura'}
// 2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
// length: 3

// ................................................................
// 2 - 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // a) O que vai ser impresso no console?
  // Resposta: Apenas o item nome do array. 
  // ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// ...........................................................

// 3 - 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
//   console.log(novoArrayC)
// a) Irá imprimir apenas os itens diferentes de apelido "Chijo".
// 0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
// 1: {nome: 'Laís Petra', apelido: 'Laura'}
// ..................................................................................

// Exercícios de escrita de código

// 1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 //a) Crie um novo array que contenha apenas o nome dos doguinhos

// const novoArray = pets.map((item, index, array) => {
//   return item.nome 
// })
// console.log(novoArray)

// // // b) Crie um novo array apenas com os cachorros salsicha

// const novoArray1 = pets.filter((item, index, array) => {
//   return item.raca === "Salsicha"
// })
// console.log(novoArray1)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

//reduzir o tamanho do array :filter; filter não altera o conteudo do array

// const novoArray2 = pets.filter((item, index, array) => {
//    return item.raca === "Poodle"
//  })
// console.log(novoArray2)

// const petsNomeados = novoArray2.map((item, index, array) => {
//   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })
// console.log(petsNomeados)




//............................................................................
// // 2 - 
 const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((item, index, array) => {
  return item.nome
 })
 console.log(nomeProdutos)

 const precoDesconto = produtos.map((item, index, array) => {
   const ObjetoDesconto = {
     nomeProdutos: produtos.nome,
     precoDesconto:produtos.preco * 0.95,
   }
   return ObjetoDesconto
  })
  console.log(precoDesconto)


