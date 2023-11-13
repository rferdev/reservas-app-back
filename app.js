import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';

import { router as vueloRoutes } from './routes/vuelo.js';
import { router as reservaRoutes } from './routes/reserva.js';

const app = express();
const port = process.env.PORT;
const allowedOrigins = [
  'http://localhost:4200',
  'https://reservas-app-front.onrender.com',
  /\.railway\.app$/,
];

// Middleware
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(bodyParser.json());

// Routes
app.use(vueloRoutes);
app.use(reservaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
