import app from './src/time.js'

const port=3000;

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`); // Inicio el servidor WEB (escuchar)
})