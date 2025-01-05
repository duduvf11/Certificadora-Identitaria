/*
  Warnings:

  - You are about to drop the `Absorcao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Absorcao";

-- CreateTable
CREATE TABLE "Absorvente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Absorvente_pkey" PRIMARY KEY ("id")
);
