import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='bg-zinc-700 flex justify-between px-20 py-4'>
			<Link to={'/'} className='text-white font-bold'>
				<h1>React- Node - MySQL</h1>
			</Link>

			<ul className='flex gap-2'>
				<li>
					<Link to={'/'} className='bg-slate-200 px-2 py-1'>
						Home
					</Link>
				</li>
				<li>
					<Link to={'/new'} className='bg-slate-200 px-2 py-1'>
						Create task
					</Link>
				</li>
			</ul>
		</div>
	);
};
