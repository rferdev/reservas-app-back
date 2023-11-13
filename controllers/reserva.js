import ReservaModel from '../models/reserva.js';

const reservaModel = new ReservaModel();

export const createReserva = async (req, res) => {
  const { vueloId } = req.body;

  if (!vueloId) {
    return res.status(400).json({ message: 'El ID del vuelo es obligatorio' });
  }

  try {
    const newReserva = await reservaModel.createReserva(vueloId);
    res.json(newReserva);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear la reserva' });
  }
};

export const getAllReservas = async (req, res) => {
  try {
    const reservas = await reservaModel.getAllReservas();
    res.json(reservas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener las reservas' });
  }
};

export const getReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await reservaModel.getReserva(parseInt(id));

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
    await reservaModel.deleteReserva(parseInt(id));

    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.meta.cause });
  }
};
