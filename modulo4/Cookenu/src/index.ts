import app from "./app"
import generateId from "./services/idGenerator"

app.get("/")

console.log(
    generateId()
);

// import connection from "./connection"

// app.get("/")

// connection.raw("SHOW TABLES").then(console.log)