// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01


/*
function retornaTamanhoArray(array) {
    let flores  = ["margarida", "lírio", "gerbera", "girassol", "violeta"]
        return array.length
}


 // EXERCÍCIO 02
 function retornaArrayInvertido(array) {
    let numeros  = [30, 40, 50, 60]
    reverseArray = array.reverse()
    return array
}


 // EXERCÍCIO 03
 function retornaArrayOrdenado(array) {
    array.sort((a, b) => a - b);
    return array;
}


 // EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((numero) => {
        return numero % 2 === 0
    })
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayDePares = array.filter((numero)=> {
        if (numero % 2 === 0){
            return true
        }
    })
    let arrayPotencia = arrayDePares.map((numero)=>{
        return numero ** 2
    })
    return arrayPotencia
}


/////// não consegui fazer ////////////////
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeros = [80, 40, 35, 29]
    maiorNumero = Math.max(numeros, array)
    return maiorNumero    
}


///// falta fazer /////////////
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    maiorNumero: 
    maiorDivisivelporMenor:
    diferença: 
}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayDePares = []
    for (let i = 0; i < n; i++) {
        arrayDePares[i] = i * 2
    }
    return arrayDePares
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
        return "Isósceles"
    } else{
        return "Escaleno"
    }
}


///////// falta fazer /////////////
// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {
    const num = [3, 2, 1, 4, 7, 6, 5]
    

    return num
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let movie = {
        nome: 'Bastardos Inglórios',
        ano: 2009,
        diretor: 'Quentin Tarantino',
        elenco: ['Brad Pitt', 'Christoph Waltz', 'Daniel Brühl', 'Mike Myers']   
    }
return `Venha assistir ao ${movie.nome} de ${movie.ano}, dirigido por ${movie.diretor} e estrelado por ${movie.elenco[0]}, ${movie.elenco[1]}, ${movie.elenco[2]}, ${movie.elenco[3]}`
}

*/

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let usuario = {
        nome: "Astrodev",
	    idade: 25,
	    email: "astrodev@labenu.com.br",
	    endereco: "Rua do Futuro, 4"
    }
    
        let novoUsuario = {
            ...usuario,
            nome: "ANÔNIMO",
        }
        return `${novoUsuario.nome}, ${novoUsuario.idade},${novoUsuario.endereco}, ${novoUsuario.email} `
    }


/*
// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
}
*/