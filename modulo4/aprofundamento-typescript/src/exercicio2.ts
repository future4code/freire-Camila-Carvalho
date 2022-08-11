// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

type ComFuncao ={
    num: number,
    soma: (n1: number)=>number
}
const objeto: ComFuncao ={
    num: 10,
    soma(n1) {
        return (n1+n1)  
    },
}
console.log(objeto.num)
const retornoDoObjeto = objeto.soma(100)
console.log(retornoDoObjeto)