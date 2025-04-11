import express from "express";
import moment from "moment";

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hola, bienvenido a mi api.");
})

app.get('/hora', (req, res) => {
    res.send(moment().format('hh:mm:ss'));
})

app.get('/fecha-completa', (req, res) => {
    res.send(Date.now());
})