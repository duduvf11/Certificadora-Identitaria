import {Router} from 'express'

import { CreateFormService } from '../services/formulario/CreateFormService.js'
import { GetAllForms } from '../services/formulario/GetAllForms.js'

const router = Router()

//Enviar formulario
router.post('/', async (req, res) => {

    const {cpf, nome, email, quantidade, endereco} = req.body
    const createFormService = new CreateFormService();

    const createForms = await createFormService.execute({cpf, nome, email, quantidade, endereco})

    res.json(createForms)

})

//Retorna os formularios
router.get("/", async (req, res) => {

    const getAllForms = new GetAllForms();

    const forms = await getAllForms.execute()
    
    res.json(forms)
})

export default router