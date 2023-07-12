import { pool } from '../db.js';

export const getTasks = async (req, res) => {
	try {
		const [tasks] = await pool.query(
			'SELECT * FROM tasks ORDER BY created_at DESC'
		);
		res.json(tasks);
	} catch (error) {
		return res.status(500).json({ message: 'Internal server error' });
	}
};

export const getTask = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);

		const [task] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);

		// Si la tarea no existe, devolvemos un error 404
		if (task.length === 0)
			return res.status(404).json({ message: 'Task not found' });

		return res.json(task[0]);
	} catch (error) {
		return res.status(500).json({ message: 'Internal server error' });
	}
};

export const createTask = async (req, res) => {
	try {
		const { title, description } = req.body;

		const [newTask] = await pool.query(
			'INSERT INTO tasks (title, description) VALUES (?, ?)',
			[title, description]
		);

		return res.json({
			id: newTask.insertId,
			title,
			description,
		});
	} catch (error) {
		return res.status(500).json({ message: 'Internal server error' });
	}
};

export const updateTask = async (req, res) => {
	try {
		const { id } = req.params;

		const { title, description } = req.body;

		const [task] = await pool.query(
			'UPDATE tasks SET title = ?, description = ? WHERE id = ?',
			[title, description, id]
		);

		if (task.affectedRows === 0)
			return res.status(404).json({ message: 'Task not found' });

		res.json({ id, title, description });
	} catch (error) {
		return res.status(500).json({ message: 'Internal server error' });
	}
};

export const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;

		const [task] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);

		if (task.affectedRows === 0)
			return res.status(404).json({ message: 'Task not found' });

		res.json({ message: 'Task deleted successfully' });
	} catch (error) {
		return res.status(500).json({ message: 'Internal server error' });
	}
};
