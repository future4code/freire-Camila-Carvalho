import app from "./app"

app.post("users/signup")
app.post("/isers/login")
app.get("/users/profile")
app.get("/users/:id/profile")

app.post("/recipe")
app.post("/recipe/:id")