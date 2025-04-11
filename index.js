import express from "express";

const app = express();
const port = 3000;
const personas={
    "hola": "aaa"
}

app.get('/', (req, res) => {
    res.send("Hello world!!");  // EndPoint "/", verbo GET
})

app.get('/hola', (req, res) => {
    res.send(personas);  // EndPoint "/", verbo GET
})

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`); // Inicio el servidor WEB (escuchar)
})