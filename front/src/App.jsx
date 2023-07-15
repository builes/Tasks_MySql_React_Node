import { Navbar } from './components/Navbar';
import { TaskProvider } from './context/TaskContext';
import { RoutesApp } from './routes/RoutesApp';

export const App = () => {
	return (
		<TaskProvider>
			<Navbar />
			<RoutesApp />;
		</TaskProvider>
	);
};
