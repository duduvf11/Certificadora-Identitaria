import prisma from "../../prisma/client.js"

class DinheiroService{
    async execute({nome, quantidade, telefone}){

        const createDonationMoney = await prisma.dinheiro.create({
            data: {
                nome: nome,
                quantidade: quantidade,
                telefone: telefone
            }
        })

        if (createDonationMoney) return true
        
        return false
    }
}

export {DinheiroService}