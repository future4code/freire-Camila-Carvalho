import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";
import dotenv from "dotenv";

const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors