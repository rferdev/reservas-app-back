import { Router } from 'express';
import {
  createReserva,
  getAllReservas,
  getReserva,
} from '../controllers/reserva.js';

const router = Router();

router.post('/reservas', createReserva);
router.get('/reservas', getAllReservas);
router.get('/reservas/:id', getReserva);

export { router };
