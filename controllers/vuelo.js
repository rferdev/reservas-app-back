import Vuelo from '../models/vuelo.js';

export const getAllVuelos = async (req, res) => {
  try {
    const vuelos = await Vuelo.getAllVuelos();
    res.json(vuelos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
