import express from 'express';
import bodyParser from 'body-parser';

import { router as vueloRoutes } from './routes/vuelo.js';
import { router as reservaRoutes } from './routes/reserva.js';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(vueloRoutes);
app.use(reservaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
