import { useEffect } from 'react';
import { getTasks } from '../api/tasks';
import { TaskCard } from '../components/TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const Tasks = () => {
	const { tasks, setTasks } = useContext(TaskContext);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await getTasks();
				setTasks(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTasks();
	}, []);

	return (
		<div>
			<h1>Tasks</h1>
			{tasks.length === 0 ? (
				<h1>No tasks yet</h1>
			) : (
				tasks.map((task) => <TaskCard key={task.id} task={task} />)
			)}
		</div>
	);
};
