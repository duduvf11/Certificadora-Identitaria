import { Router } from "express";

import { LoginUserService} from "../services/login/LoginUserService.js";
import { CreateUserService } from "../services/login/CreateUserService.js";

const router = Router();

// Criar novo usuário
router.post('/new', async (req, res) => {
   
        res.clearCookie('authToken');

        const { user, password } = req.body;
        const createUserService = new CreateUserService();

        const createUser = await createUserService.execute({ user, password });

        if (createUser) {
            res.json({ message: "Usuário cadastrado." });
        } else {
            res.status(400).json({ message: "Esse usuário já existe." });
        }

});


// Logar usuário
router.post('/login', async (req, res) => {

    const { user, password } = req.body;
    const loginUserService = new LoginUserService();

    const loginUser = await loginUserService.execute({ user, password });

    if (!loginUser) {
        return res.status(400).json({ message: "Usuário e/ou senha errados." });
    }

    const token = loginUser.token;

    // Verifica e remove o cookie antigo, se existir
    res.clearCookie('authToken');
    
    res.cookie('authToken', token, {
        maxAge: 1000 * 60 * 10, 
        httpOnly: true,
        path: '/'
    });

    res.json({ message: "Logado" });
    res.status(500).json({ message: "Erro interno do servidor." });

});

export default router;
