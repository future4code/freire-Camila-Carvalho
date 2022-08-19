//a. Como você passou os parâmetros de type para a requisição? Por quê?

//b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}



type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
//Dessa forma podemos restringir os tipos a apenas os tipos acima e atirar um erro, caso o dado esteja fora do esperado.