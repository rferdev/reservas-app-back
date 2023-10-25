import { pool } from '../db/config.js';

class Reserva {
  static async createReserva(vueloID) {
    const query =
      "INSERT INTO Reservas (VueloID, PasajeroID, FechaReserva, Estado) VALUES ($1, 1, $2, 'Confirmada') RETURNING *";
    const result = await pool.query(query, [vueloID, new Date()]);
    return result.rows[0];
  }

  static async getAllReservas() {
    const query = 'SELECT * FROM reservas ORDER BY ReservaID';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getReserva(reservaID) {
    const query = 'SELECT * FROM Reservas WHERE ReservaID = $1';
    const result = await pool.query(query, [reservaID]);

    if (result.rows.length === 0) return false;

    return result.rows[0];
  }
}

export default Reserva;
