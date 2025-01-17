import express from 'express';
import cors from "cors";

import loginRouter from "./src/routes/login.js"
import formularioRouter from "./src/routes/formulario.js"
import doacaoDinheiroRouter from "./src/routes/dinheiroDoacao.js"
import doacaoAbsorventeRouter from "./src/routes/absorventeDoacao.js"
import estoqueRouter from "./src/routes/estoque.js"

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/login', loginRouter)
app.use('/forms', formularioRouter)
app.use('/pad', doacaoAbsorventeRouter)
app.use('/money', doacaoDinheiroRouter)
app.use('/controle', estoqueRouter)

app.get('/', (req,res) => {
    res.json({testing: 'Hello'})
})

app.listen(3000, () => {
    console.log("Funcionando...")
});