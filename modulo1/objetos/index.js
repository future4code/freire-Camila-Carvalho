// Exercícios de interpretação de código
/*
// 1 - a) Matheus Nachtergaele  Virginia Cavendish

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//.........................................................................

// 2 - a) 
// nome: Juca, idade: 3, raca: SRD
// nome: Juba, idade: 3, raca: SRD
// nome: Jubo, idade 3 , raca: SRD

// b) É o espalhamento ou Spred de objeto

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// .......................................................................

// 3 - 
// a) false
// b) undefined pois altura não foi definida no código.


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// .......................................................................
*/
// Exercícios de escrita de código

// 1 - 
// a)
/*

const pessoa = {
   nome: "Camila", 
   apelidos: ["Camis", "Cami", "Bibi"]
}

function pessoaApelidos(apelidosnovos){
    console.log(`Eu sou ${apelidosnovos.nome}, mas pode me chamar de: ${apelidosnovos.apelidos[0]}, ${apelidosnovos.apelidos[1]} ou ${apelidosnovos.apelidos[2]}`)
}
pessoaApelidos(pessoa)

const novaPessoa = {
    ...pessoa, 
    apelidos: ["mila", "miloca", "babi"]
}

pessoaApelidos(novaPessoa)

 // ...........................................................................

 // 2 - 

const pessoa1 = {
     nome: "Thiago",
     idade: 18,
     profissao: "estudante"
 }

const pessoa2 = {
    nome: "Amanda",
    idade: 28,
    profissao: "biologa"
}
function minhaFuncao(pessoa1, pessoa2) {
    const novaPessoa = {
        ...pessoa1,
        ...pessoa2,
    }
    const arraypessoa = [novaPessoa.nome, novaPessoa.nome.length , novaPessoa.idade, 
       novaPessoa.profissao, novaPessoa.profissao.length]
        return arraypessoa
    }
console.log(minhaFuncao(pessoa1))

// ..........................................................................
*/
// 3 

carrinho = []

const fruta1 = {
    nome: "Uva",
    disponivel: true
}

const fruta2 = {
    nome: "Limao",
    disponivel: true
}

const fruta3 = {
    nome: "Cupuacu",
    disponivel: true
}

function sacolao(fruta) {
    const sacolaDeFrutas = {
        ...fruta1,
        ...fruta2,
        ...fruta3
    }
    carrinho = [fruta1, fruta2, fruta3]
    return carrinho
}
console.log(sacolao(carrinho.fruta1))
    
