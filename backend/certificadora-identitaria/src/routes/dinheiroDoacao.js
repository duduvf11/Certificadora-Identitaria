import {Router} from 'express'

import { DinheiroService } from '../services/doacao/DinheiroService.js'

const router = Router()

router.post('/', async (req, res) => {

    const {nome, quantidade, telefone} = req.body
    const dinheiroService = new DinheiroService()

    const doacaoEmDinheiro = await dinheiroService.execute({nome, quantidade, telefone})

    res.json(doacaoEmDinheiro)
})

export default router