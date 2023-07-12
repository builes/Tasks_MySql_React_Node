import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
	// pool.query() ejecuta una consulta a la base de datos
	// SELECT 1 + 1 AS result es una consulta que devuelve 2
	const [result] = await pool.query('SELECT 1 + 1 AS result ');
	console.log(result[0]);

	res.json('hola');
});

export default router;
