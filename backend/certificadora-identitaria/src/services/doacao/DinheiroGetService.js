import prisma from "../../prisma/client.js"

class DinheiroGetService{
    async execute(){

        const getAllPad = await prisma.dinheiro.findMany()

        return getAllPad
    }
}

export {DinheiroGetService}