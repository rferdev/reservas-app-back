import { Router } from 'express';
import {
  createReserva,
  deleteReserva,
  getAllReservas,
  getReserva,
} from '../controllers/reserva.js';

const router = Router();

router.post('/reservas', createReserva);
router.get('/reservas', getAllReservas);
router.get('/reservas/:id', getReserva);
router.delete('/reservas/:id', deleteReserva);

export { router };
