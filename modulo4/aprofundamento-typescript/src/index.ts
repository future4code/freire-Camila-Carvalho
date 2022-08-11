/* UNION TYPE */
let nome: string | undefined = ''
nome = "peu"
nome = undefined

/* TYPE ALIASES */
type Pessoa = {
    name: string,
    age: number
}

const astrodev: Pessoa = {
    name: "astrodev",
    age: 30
}


/* TYPE + UNION */
type BirthDate = number | string | undefined

type Usuário = {
    name: string,
    birthDate: BirthDate
}

const user1: Usuário = {
    name: "Peu",
    birthDate: "22/08"
}

const user2: Usuário = {
    name: "Nany",
    birthDate: undefined
}

/* INTERSECTION TYPE */
type User = {
    name: string,
    age: number
}

type Account = {
    userName: string,
    password: string
}

type UserInfo = User & Account

const user: UserInfo = {
    name:"Peu",
    age: 27,
    userName: "peustef",
    password: "123456"
}

console.log(user)


/* TYPE INFERENCE */
let myName = "Peu"
// myName = 12
console.log(typeof myName)


/* ENUM */
enum LabeTurmas {
    HOPPER = "Hopper",
    HOOKS = "hooks",
    GEBRU = "Timit Gebru",
    GUIMARAES = "Guimaraes",
    JOY = "Joy" 
}

type Instructor = {
    name: string,
    turma: LabeTurmas
}

const instrutor: Instructor = {
    name: "Peu",
    turma: LabeTurmas.GEBRU 
}

console.log(instrutor)
