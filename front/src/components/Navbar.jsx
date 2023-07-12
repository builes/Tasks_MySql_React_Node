import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div>
			<h1>React- Node - MySQL</h1>

			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/new'}>Create task</Link>
				</li>
			</ul>
		</div>
	);
};
