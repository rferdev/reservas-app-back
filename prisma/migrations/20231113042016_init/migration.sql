-- CreateTable
CREATE TABLE "Pasajero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "numeroIdentificacion" TEXT NOT NULL,
    "celular" TEXT,

    CONSTRAINT "Pasajero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" SERIAL NOT NULL,
    "vueloId" INTEGER,
    "pasajeroId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vuelo" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "origen" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "salida" TIMESTAMP(3) NOT NULL,
    "llegada" TIMESTAMP(3) NOT NULL,
    "capacidad" INTEGER NOT NULL,

    CONSTRAINT "Vuelo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_vueloId_fkey" FOREIGN KEY ("vueloId") REFERENCES "Vuelo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_pasajeroId_fkey" FOREIGN KEY ("pasajeroId") REFERENCES "Pasajero"("id") ON DELETE SET NULL ON UPDATE CASCADE;
