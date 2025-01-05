import prisma from "../../prisma/client.js"

import bcryptjs from "bcryptjs"
const { hash } = bcryptjs;

class CreateUserService{
    async execute({user, password}){

        const userExist = await prisma.user.findFirst({
            where: {
                id: user
            }
        })

        if (userExist) return null

        const passwordHash = await hash(password, 8)

        const createUser = await prisma.user.create({
            data: {
                id: user,
                senha: passwordHash,
                admin: true
            }
        })

        return createUser

    }
}

export {CreateUserService}