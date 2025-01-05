import express from 'express';

import loginRouter from "./src/routes/login.js"
import formularioRouter from "./src/routes/formulario.js"

const app = express();

app.use(express.json());

app.use('/login', loginRouter)
app.use('/forms', formularioRouter)

app.get('/', (req,res) => {
    res.json({testing: 'Hello'})
})

app.listen(3000, () => {
    console.log("Funcionando...")
});