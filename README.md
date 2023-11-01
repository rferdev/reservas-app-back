# reservas-app-back

Pasos para reproducir una instalación local:

1. Instalar PostgreSQL y crear una base de datos local.
2. Conectarse a la base de datos y ejecutar las querys indicadas en el Gist (https://gist.github.com/rferdev/403994cf5004f2c26dab27c5148eaeab)
3. Clonar el repositorio (git clone https://github.com/rferdev/reservas-app-back.git)
4. Instalar las dependencias necesarias ejecutando el comando "npm install" desde una consola
5. Asignar el tipo de conexión de base de datos a una local, cambiando el pool en el archivo db/config.js de la siguiente manera:
  export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'database_name',
    password: 'user_password',
    port: 5432,
  }); (se deben cambiar los valores para que coincidan con los establecidos en el paso 1)
6. Iniciar el servidor ejecutando el comando "node app.js"

Modelo Entidad Relación: https://github.com/rferdev/shared/blob/main/app-reservas/app-reservas-mer.png
