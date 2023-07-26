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
			{console.log(tasks.length)}
			<h1 className='text-5xl text-white font-bold text-center py-4'>Tasks</h1>
			<div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2'>
				{tasks.length === 0 ? (
					<h1 className='py-4 text-2xl font-bold text-white'>No tasks yet</h1>
				) : (
					tasks.map((task) => <TaskCard key={task.id} task={task} />)
				)}
			</div>
		</div>
	);
};
