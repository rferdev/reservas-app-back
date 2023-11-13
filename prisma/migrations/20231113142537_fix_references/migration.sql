/*
  Warnings:

  - Made the column `vueloId` on table `Reserva` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pasajeroId` on table `Reserva` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_pasajeroId_fkey";

-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_vueloId_fkey";

-- AlterTable
ALTER TABLE "Reserva" ALTER COLUMN "vueloId" SET NOT NULL,
ALTER COLUMN "pasajeroId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_vueloId_fkey" FOREIGN KEY ("vueloId") REFERENCES "Vuelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_pasajeroId_fkey" FOREIGN KEY ("pasajeroId") REFERENCES "Pasajero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
