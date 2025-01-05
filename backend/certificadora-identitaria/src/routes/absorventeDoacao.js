import {Router} from 'express'

import { AbsorventeService } from '../services/doacao/absorventeService.js'
import { AbsorventeGetService } from '../services/doacao/AbsorventeGetService.js'

const router = Router()

router.post('/', async (req, res) => {

    const {nome, quantidade, telefone} = req.body
    const absorventeService = new AbsorventeService()

    const doacaoDeAbsorvente = await absorventeService.execute({nome, quantidade, telefone})

    res.json(doacaoDeAbsorvente)
})

router.get('/', async (req, res) => {

    const absorventeGetService = new AbsorventeGetService()

    const getAll = await absorventeGetService.execute()

    res.json(getAll)
})

export default router