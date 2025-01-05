import "dotenv/config"

import prisma from "../../prisma/client.js"

import jsonwebtoken from "jsonwebtoken"
const { sign } = jsonwebtoken

import bcryptjs from "bcryptjs"
const { compare } = bcryptjs

class LoginUserService{

    async execute({user, password}){

            const userExist = await prisma.user.findFirst({
                where: {
                    id: user
                }
            })

            if (!userExist) return null
            
            const decryptedPassword = await compare(password, userExist.senha)

            if (!decryptedPassword) return null

            const token = sign({
                user: userExist.id
            },
                process.env.JWT_SECRET, {
                expiresIn: "2m"
            })
            
            return {
                token: token
            }
        
    }

}

export {LoginUserService}
