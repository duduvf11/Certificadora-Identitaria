import prisma from "../../prisma/client.js"

class CreateFormService{

    async execute({cpf, nome, email, quantidade, endereco}){

        const createForms = await prisma.form.create({
            data: {
                cpf: cpf, 
                nome: nome,
                email: email, 
                quantidade: quantidade,
                endereco: endereco,
                status: true
            }
        })

        if (!createForms) return null

        return "Formulario criado"

    }
}

export {CreateFormService}