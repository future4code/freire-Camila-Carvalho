
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let quantidadeDeVezes = 0
    for (let numero of arrayDeNumeros){
      if (numero === numeroEscolhido){
        quantidadeDeVezes ++
      }
    }
    if (quantidadeDeVezes > 0){
      return `O número ${numeroEscolhido} aparece ${quantidadeDeVezes}x`
    } else {
      return `Número não encontrado`
    }
  }