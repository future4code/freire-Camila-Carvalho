// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const resultado = num1 + num2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(x,y) {
  const resultado = (x * y)
  const x = Number((prompt(`Informe a altura do triângulo`))
  const y = Number((prompt(`Informe a largura do triângulo`))
  return resultado
}
console.log (calculaAreaRetangulo(x,y))



// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt(`Digite o ano atual: `)
  const anoNascimento = prompt(`Digite o ano de nascimento: `)
  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso/(altura*altura)
  return IMC
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt(`Digite o seu nome: `)
  const idade = prompt(`Digite a sua idade: `)
  const email = prompt(`Digite o seu email: `)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt(`Digite a sua cor favorita: `)
  const cor2 = prompt(`Digite outra cor favorita: `)
  const cor3 = prompt(`Digite mais uma outra cor favorita: `)
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase()
  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  custo = 5500
  valorIngresso = 50
  const vendidos = custo/valorIngresso
  return vendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const palavra1 = string1.length
  const palavra2 = string2.length
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const elemento = array[]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const tam = array.length
  const temp = 0
  temp = array[0]
  array[0] = array[tam-1]
  array[tam-1] = temp

  let array2 = array
  return array2
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}

////Tive problema com o navegador, não executou mais nenhum código e não consegui concluir o exercicio.