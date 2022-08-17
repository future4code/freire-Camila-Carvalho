import { application } from "express";
const app = express();
app.use(express.json());


app.get("/ping", (req, res) => {          
    res.send("Pong! :raquete_e_bola_de_tenis_de_mesa:");
})
console.log("pong");

///////

type List = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};
const list: List[] = [
    {
    userId: 1,
    id: 1,
    title: "lavar a louça",
    completed: true,
    },
    {
    useId:2,
    id: 1,
    title: "limpar a cozinha",
    completed: true
    },
    { 
    userId: 3,
    id: 2, 
    title: "alimentar o cachorro",
    complete: false,
    },
];

app.get("/toDoListStatus", (req, res) =>{
    const listStatus = req.query.completed

//
//retorna apenas as tarefas completadas

    const tarefas = list.filter((tarefa) => {
        return tarefa.completed.toString() === listStatus
    });
        res.send({tarefas})
});


// exercicio 4
application.get("/toDoListStatus", (req, res) => {
//receba o valor do postman que se chama completed e vem via query
//true ou false
const ListStatus = req.query.completed;

const tarefas = list.filter(tarefa => {
    return tarefa.completed.toString === listStatus
});

    res.send({tarefas})

});