import express from 'express';
import { router as vueloRoutes } from './routes/vuelo.js';

const app = express();
const port = 3000;

// Rutas
app.use(vueloRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
