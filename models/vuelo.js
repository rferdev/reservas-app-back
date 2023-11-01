import { pool } from '../db/config.js';

class Vuelo {
  static async getAllVuelos() {
    const query = 'SELECT * FROM vuelos ORDER BY salida DESC';
    const result = await pool.query(query);
    return result.rows;
  }
}

export default Vuelo;
