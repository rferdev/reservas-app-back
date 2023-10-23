import { Router } from 'express';
import { createReserva, getReserva } from '../controllers/reserva.js';

const router = Router();

router.post('/reserva', createReserva);
router.get('/reserva/:id', getReserva);

export { router };
