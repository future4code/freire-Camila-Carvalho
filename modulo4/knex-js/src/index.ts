import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './connection';
import { Request, Response } from "express"
import exp from 'constants';

const app = express()

app.use(express.json())
app.use(cors())

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
    `)
    return result [0][0]
}

getActorById("001")
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
});

app.listen(3003, () =>{
    console.log("Servidor rorando na porta 3003 [https://localhost:3003]")
})


const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
    }
} .catch (error) {
    res.status(500).send(error.sqlMessage || error.message)
}
}

// console.log("[Freire] Conectando ao banco");

// const app = express()
// app.use(express.json())
// app.use(cors())


// app.get('/alunos', async (req,res) =>{
//     try {
//         const result = await connection.raw(`
//             SELECT * FROM alunos_labenu;        
//         `)       
//         res.status(200).send(result[0])        
//     } catch (error: any) {
//         res.status(500).send( error.sqlMessage || error.message)
//     }})

// app.get ('/alunosbuilder',async (req,res) => {
//     try {
//         const result = await connection("alunos_labenu")
//         res.status(200).send(result)
//     } catch (error:any) {
//         res.status(500).send(error.sqlMessage || error.message)
//     }
// })

// app.put('/alunos/:id',async (req,res) => {

//     try {
//         const result = await connection("alunos_labenu")
//         .update({
//             nome: req.body.nome,
//             email: req.body.email,
//             idade: req.body.idade,
//             especialidade: req.body.especialidade           

//         }).where({id: req.params.id})
//         res.status(200).send("Editado com sucesso")
//     } catch (error:any) {
//         res.status(500).send(error.sqlMessage || error.message)
//     }
    
// })





// app.post('/alunos',async (req,res) => {
//     try {
//          const result = await connection.raw(`
//             INSERT INTO alunos_labenu (id,nome,email,idade,especialidade)
//             VALUES( 
//                 ${req.body.id},
//                 "${req.body.nome}",
//                 "${req.body.email}",
//                 ${req.body.idade},
//                 "${req.body.especialidade}"
//             );`)
//                 res.status(201).send("Cadastrado com sucesso")
//     } catch (error:any) {
//                 res.status(500).send(error.sqlMessage || error.message)
//     }
// })







// const server = app.listen (3003,()=>{
//     if (server){
//         const address = server.address() as AddressInfo;
//         console.log(`Server is running in http://localhost:${address.port}`)
//     }else{
//         console.error(`Failure upon starting server.`)
//     }
// })
