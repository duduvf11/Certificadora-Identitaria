import prisma from "../../prisma/client.js"

class AbsorventeGetService{
    async execute(){

        const getAllPad = await prisma.absorvente.findMany()

        return getAllPad
    }
}

export {AbsorventeGetService}