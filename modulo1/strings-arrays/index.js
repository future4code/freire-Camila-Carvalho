//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1 - 
/*
let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. quantidade de itens = 11

let i = 0
console.log('d. ', array[i]) // d. 3


array[i+1] = 19
console.log('e. ', array) 
// (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
// f. 3+6= 9
*/
// ..................................................................

// 2 - 
/*
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS, 27

*/
// ...................................................................

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1 - 
const nomenomeDoUsuario = prompt(`Qual o seu nome?`)
const emailDoUsuario = prompt(`Qual é o seu e-mail?`)

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomenomeDoUsuario}`)


// ..................................................................................................................

// 2 - 

let comidaPreferida = ["Camarão", "Churrasco", "Pizza", "Carangueijo", "Sushi" ]
console.log(comidaPreferida)

let comida = console.log(`Essas são as minhas comidas preferidas: `)
console.log(comidaPreferida[i=0])
console.log(comidaPreferida[i=1])
console.log(comidaPreferida[i=2])
console.log(comidaPreferida[i=3])
console.log(comidaPreferida[i=4])

let comidaUsuario = prompt(`Qual a sua comida preferida?`)
comidaPreferida[1] = comidaUsuario
console.log(comidaPreferida)

//.........................................................................................................................
// 3 - 

let listaDeTarefas = []
let tarefaUsuario1 = prompt(`Digite uma tarefa que deseja realizar no dia - Tarefa 0`)
let tarefaUsuario2 = prompt(`Digite uma outra tarefa - Tarefa 1 `)
let tarefaUsuario3 = prompt(`Digite mais uma outra tarefa - Tarefa 2`)

listaDeTarefas.push(tarefaUsuario1, tarefaUsuario2, tarefaUsuario3)
console.log(listaDeTarefas)


let indice = prompt(`Digite o índice de qual tarefa você realizou: 0, 1 ou 2`)

let tarefasRealizadas = Number(indice-1)
listaDeTarefas.splice(tarefasRealizadas-1)
console.log(listaDeTarefas)


//.......................................................................................
