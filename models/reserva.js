import { pool } from '../db/config.js';

class Reserva {
  static async createReserva(vueloID) {
    const query =
      "INSERT INTO reserva (vuelo_id, pasajero_id, fecha_reserva, estado) VALUES ($1, 1, $2, 'Confirmada') RETURNING *";
    const result = await pool.query(query, [vueloID, new Date()]);
    return result.rows[0];
  }

  static async getAllReservas() {
    const query = 'SELECT * FROM reserva ORDER BY fecha_reserva DESC';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getReserva(reservaID) {
    const query = 'SELECT * FROM reserva WHERE reserva_id = $1';
    const result = await pool.query(query, [reservaID]);

    if (result.rows.length === 0) return false;

    return result.rows[0];
  }

  static async deleteReserva(reservaID) {
    const query = 'DELETE FROM reserva WHERE reserva_id = $1';
    const result = await pool.query(query, [reservaID]);

    return result;
  }
}

export default Reserva;
