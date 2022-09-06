


//Exercício 1
//a) serve para inicializar objetos com atributos definidos

//b)
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }
  

//c) Um membro “public” pode ser acessado de qualquer local. 
// Já um membro “private”, é acessível apenas para a própria classe.


