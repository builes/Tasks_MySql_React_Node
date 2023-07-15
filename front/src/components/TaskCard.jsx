import React from 'react';
import { deleteTask } from '../api/tasks';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskCard = ({ task }) => {
	const { tasks, setTasks } = useContext(TaskContext);

	const handleDelete = async () => {
		try {
			const response = await deleteTask(task.id);
			setTasks(tasks.filter((taskFiltered) => taskFiltered.id !== task.id));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h2>{task.title}</h2>
			<p>{task.description}</p>
			<span>{task.done ? '✔️' : '❌'}</span>
			<span>{task.created_at}</span>
			<button onClick={handleDelete}>Delete</button>
			<button>Edit</button>
		</div>
	);
};
