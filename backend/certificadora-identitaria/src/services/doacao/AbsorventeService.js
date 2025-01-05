import prisma from "../../prisma/client.js"

class AbsorventeService{
    async execute({nome, quantidade, telefone}){

        const createDonationPad = await prisma.absorvente.create({
            data: {
                nome: nome,
                quantidade: quantidade,
                telefone: telefone
            }
        })

        if (createDonationPad) return true
        
        return false
    }
}

export {AbsorventeService}