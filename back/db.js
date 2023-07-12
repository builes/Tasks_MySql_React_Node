import { createPool } from 'mysql2/promise';

// createPool() crea una conexión a la base de datos, la bd debe estar creada
export const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'task_db',
});
