import prisma from "../../prisma/client.js"

class EstoqueService{
    async execute(){

        const totalDinheiro = await prisma.dinheiro.aggregate({
            _sum: {
              quantidade: true,
            },
          });

        const dinheiro = totalDinheiro._sum.quantidade

        const totalAbsorvente = await prisma.absorvente.aggregate({
            _sum: {
              quantidade: true,
            },
          });

        const absorventes = totalAbsorvente._sum.quantidade

        console.log({absorventes, dinheiro})
        return {dinheiro, absorventes}
        
    }
}

export {EstoqueService}