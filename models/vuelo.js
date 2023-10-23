import { pool } from '../db/config.js';

class Vuelo {
  static async findAll() {
    const query = 'SELECT * FROM vuelos ORDER BY salida';
    const result = await pool.query(query);
    return result.rows;
  }
}

export default Vuelo;
