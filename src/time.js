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

export default app;