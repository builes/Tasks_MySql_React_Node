import axios from 'axios';

// esta funcion hace una peticion post al servidor para crear una tarea
export const createTask = async (task) => {
	try {
		return await axios.post('http://localhost:3000/api/tasks', task);
	} catch (error) {
		console.log(error);
	}
};

export const getTasks = async () => {
	try {
		return await axios.get('http://localhost:3000/api/tasks');
	} catch (error) {
		console.log(error);
	}
};

export const getTask = async (id) => {
	try {
		return await axios.get(`http://localhost:3000/api/tasks/${id}`);
	} catch (error) {
		console.log(error);
	}
};

export const updateTask = async (id, task) => {
	try {
		return await axios.put(`http://localhost:3000/api/tasks/${id}`, task);
	} catch (error) {
		console.log(error);
	}
};

export const deleteTask = async (id) => {
	try {
		return await axios.delete(`http://localhost:3000/api/tasks/${id}`);
	} catch (error) {
		console.log(error);
	}
};
