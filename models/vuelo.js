import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class VueloModel {
  async getAllVuelos() {
    return prisma.vuelo.findMany({
      orderBy: {
        salida: 'desc',
      },
    });
  }
}
