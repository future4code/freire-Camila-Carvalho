const minhaString : string = "Camila"

type Pessoa ={
    nome: string,
    idade: Number,
    corFavorita: string
}

enum Cores {
    AZUL="Azul",
    AMARELO="Amarelo",
    VERDE="Verde",
    VIOLETA="Violeta",
    VERMELHO="Vermelho",
    LARANJA="Laranja"
}
    
const pessoa: Pessoa = {
    nome: "Camila",
    idade: 35,
    corFavorita:Cores.VERMELHO
}
console.log(pessoa)