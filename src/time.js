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
    let fecha=moment.tz("2014-06-01 12:00", "America/Buenos_Aires");
    res.send(Date.now());
})

export default app;