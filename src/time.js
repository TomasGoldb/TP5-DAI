import express from "express";
import moment from "moment";

const app = express();
const port = 3000;
app.use(express.json());



app.get('/', (req, res) => {
    res.send("Hola, bienvenido a mi api.");
})

app.get('/hora', (req, res) => {
    res.send(moment().format('hh:mm:ss'));
})

app.get('/fecha-completa', (req, res) => { 
    res.send(moment().format('MMMM Do YYYY, h:mm:ss a'));
})

app.use((req, res, next) => {
    res.status(404).send(
        `
        <img src="https://http.cat/404">
        `
    )
})

export default app;