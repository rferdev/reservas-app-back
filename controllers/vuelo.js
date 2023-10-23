import Vuelo from '../models/vuelo.js';

export const getVuelos = async (req, res) => {
  try {
    const vuelos = await Vuelo.findAll();
    res.json(vuelos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
