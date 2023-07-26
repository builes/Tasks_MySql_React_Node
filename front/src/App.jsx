import { Navbar } from './components/Navbar';
import { TaskProvider } from './context/TaskContext';
import { RoutesApp } from './routes/RoutesApp';

export const App = () => {
	return (
		<div className='bg-zinc-900 h-screen'>
			<Navbar />
			<div className='container mx-auto py-4'>
				<TaskProvider className>
					<RoutesApp />;
				</TaskProvider>
			</div>
		</div>
	);
};
