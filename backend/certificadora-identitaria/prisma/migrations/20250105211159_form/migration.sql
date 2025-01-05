-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "cpf" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
