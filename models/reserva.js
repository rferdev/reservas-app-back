import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ReservaModel {
  async createReserva(vueloId) {
    return prisma.reserva.create({
      data: {
        vueloId,
        pasajeroId: 1,
        estado: 'Confirmada',
      },
    });
  }

  async getAllReservas() {
    return prisma.reserva.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getReserva(id) {
    return prisma.reserva.findFirst({
      where: { id },
    });
  }

  async deleteReserva(id) {
    return prisma.reserva.delete({
      where: { id },
    });
  }
}
