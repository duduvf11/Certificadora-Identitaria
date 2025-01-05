import {Router} from 'express'

import { AbsorventeService } from '../services/doacao/absorventeService.js'

const router = Router()

router.post('/', async (req, res) => {

    const {nome, quantidade, telefone} = req.body
    const absorventeService = new AbsorventeService()

    const doacaoDeAbsorvente = await absorventeService.execute({nome, quantidade, telefone})

    res.json(doacaoDeAbsorvente)
})

export default router