import axios from 'axios';

// esta funcion hace una peticion post al servidor para crear una tarea
export const createTask = async (task) => {
	return await axios.post('http://localhost:3000/api/tasks', task);
};
