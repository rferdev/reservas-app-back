import { Router } from 'express';
import { getVuelos } from '../controllers/vuelo.js';

const router = Router();

router.get('/vuelos', getVuelos);

export { router };
