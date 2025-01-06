import { Router } from "express";

import { EstoqueService } from "../services/estoque/EstoqueService.js";

const router = Router()

router.get('/', async (req, res) =>{ 

    const estoqueService = new EstoqueService()

    const estoque = await estoqueService.execute()

    res.json(estoque)
})

export default router