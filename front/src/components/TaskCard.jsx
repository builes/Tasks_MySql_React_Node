import React from 'react';
import { deleteTask, updateTask } from '../api/tasks';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

export const TaskCard = ({ task }) => {
	const square = (number) => {
		return number * number;
	};

	console.log(task);
	const { tasks, setTasks } = useContext(TaskContext);

	const navigate = useNavigate();

	const handleDelete = async (id) => {
		try {
			const response = await deleteTask(id);
			setTasks(tasks.filter((task) => task.id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = (id) => {
		navigate(`/edit/${id}`);
	};

	const handleDone = async (id) => {
		const done = !task.done;
		try {
			console.log(done);
			await updateTask(id, {
				title: task.title,
				description: task.description,
				done,
			});
			setTasks(
				tasks.map((task) => {
					if (task.id === id) {
						task.done = done;
					}
					return task;
				})
			);
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
			<button onClick={() => handleDelete(task.id)}>Delete</button>
			<button onClick={() => handleEdit(task.id)}>Edit</button>
			<button onClick={() => handleDone(task.id)}>Toogle Task</button>
		</div>
	);
};
