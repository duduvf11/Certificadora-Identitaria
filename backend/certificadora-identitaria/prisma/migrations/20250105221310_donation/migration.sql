-- CreateTable
CREATE TABLE "Dinheiro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Dinheiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Absorcao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Absorcao_pkey" PRIMARY KEY ("id")
);
