-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cpf" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
