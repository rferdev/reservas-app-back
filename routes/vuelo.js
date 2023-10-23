import { Router } from 'express';
import { getAllVuelos } from '../controllers/vuelo.js';

const router = Router();

router.get('/vuelos', getAllVuelos);

export { router };
