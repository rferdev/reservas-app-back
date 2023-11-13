import VueloModel from '../models/vuelo.js';

const vueloModel = new VueloModel();

export const getAllVuelos = async (req, res) => {
  try {
    const vuelos = await vueloModel.getAllVuelos();
    res.json(vuelos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los vuelos' });
  }
};
