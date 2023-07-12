import { pool } from '../db.js';

export const createTask = async (req, res) => {
	const { title, description } = req.body;

	// pool.query() es una función asíncrona que nos permite escribir queries a la base de datos
	pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2)', [
		title,
		description,
	]);

	console.log(data);
	res.json('creating task');
};

export const getTasks = async (req, res) => {
	res.json('getting tasks');
};

export const getTask = async (req, res) => {
	res.json('getting task');
};

export const updateTask = async (req, res) => {
	res.json('updating task');
};

export const deleteTask = async (req, res) => {
	res.json('deleting task');
};
