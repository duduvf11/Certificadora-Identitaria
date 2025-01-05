import {Router} from 'express'

import { DinheiroService } from '../services/doacao/DinheiroService.js'
import { DinheiroGetService } from '../services/doacao/DinheiroGetService.js'

const router = Router()

router.post('/', async (req, res) => {

    const {nome, quantidade, telefone} = req.body
    const dinheiroService = new DinheiroService()

    const doacaoEmDinheiro = await dinheiroService.execute({nome, quantidade, telefone})

    res.json(doacaoEmDinheiro)
})

router.get('/', async (req, res) => {

    const dinheiroGetService = new DinheiroGetService()

    const getAll = await dinheiroGetService.execute()

    res.json(getAll)
})

export default router