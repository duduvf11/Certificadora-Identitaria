import prisma from "../../prisma/client.js"

class GetAllForms{
    async execute(){

        const getAll = await prisma.form.findMany()

        return getAll
    }
}

export {GetAllForms}