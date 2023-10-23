import Reserva from '../models/reserva.js';

export const createReserva = async (req, res) => {
  const body = req.body;

  if (!body.vueloID) {
    return res.status(400).json({ message: 'El ID del vuelo es obligatorio' });
  }

  try {
    const reserva = await Reserva.createReserva(body.vueloID);
    res.json(reserva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await Reserva.getReserva(id);

    if (!reserva) {
      res.status(404).json({ message: 'Reserva not found' });
    } else {
      res.json(reserva);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
