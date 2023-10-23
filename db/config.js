import pg from 'pg';

export const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'reservas',
  password: 'Psuper1+',
  port: 5432,
});
