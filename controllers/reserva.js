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
    res.status(500).json({ message: 'Error al crear la reserva' });
  }
};

export const getAllReservas = async (req, res) => {
  try {
    const vuelos = await Reserva.getAllReservas();
    res.json(vuelos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener las reservas' });
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
    res.status(500).json({ message: 'Error al obtener la reserva' });
  }
};

export const deleteReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Reserva.deleteReserva(id);

    if (result.rowCount === 0)
      return res.status(404).json({ message: 'Reserva not found' });
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al borrar la reserva' });
  }
};
