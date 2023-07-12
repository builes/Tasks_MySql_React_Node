import { Route, Routes } from 'react-router-dom';
import { Tasks } from '../pages/Tasks';
import { TaskForm } from '../pages/TaskForm';
import { NotFound } from '../pages/NotFound';

export const RoutesApp = () => {
	return (
		<Routes>
			<Route path='/' element={<Tasks />} />
			<Route path='/new' element={<TaskForm />} />
			<Route path='/*' element={<NotFound />} />
		</Routes>
	);
};
