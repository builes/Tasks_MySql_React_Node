import React from 'react';
import { deleteTask, updateTask } from '../api/tasks';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

export const TaskCard = ({ task }) => {
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
		<div className='bg-slate-300 rounded-md p-4'>
			<header className='flex justify-between gap-x-2'>
				<h2 className='text-sm font-bold'>{task.title}</h2>
				<span>{task.done ? '✔️' : '❌'}</span>
			</header>
			<p className='text-xs'>{task.description}</p>
			<span>{task.created_at}</span>
			<div className='flex  gap-x-2'>
				<button
					className='bg-red-500 px-2 py-1 text-white'
					onClick={() => handleDelete(task.id)}
				>
					Delete
				</button>
				<button
					className='bg-zinc-700 px-2 py-1 text-white'
					onClick={() => handleEdit(task.id)}
				>
					Edit
				</button>
				<button
					className='bg-green-500 px-2 py-1 text-white'
					onClick={() => handleDone(task.id)}
				>
					Toogle Task
				</button>
			</div>
		</div>
	);
};
