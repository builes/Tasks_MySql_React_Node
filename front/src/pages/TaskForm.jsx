import { Formik, Form } from 'formik';
import { createTask, getTask, updateTask } from '../api/tasks';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const TaskForm = () => {
	const { id } = useParams();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		const getTaskById = async () => {
			try {
				const response = await getTask(id);
				const task = response.data;
				setTitle(task.title);
				setDescription(task.description);
			} catch (error) {
				console.log(error);
			}
		};

		if (id) {
			getTaskById();
		}
	}, []);

	return (
		<div>
			<h1>{!id ? 'Create Task' : 'Edit Task'}</h1>
			{/* Formik nos permite mantener el estado y nos evita estar usando estados*/}
			<Formik
				initialValues={{
					title,
					description,
				}}
				enableReinitialize={true}
				// con onsubmit le decimos que hacer cuando se envie el formulario
				// values son los valores  que hay escrito en los inputs
				onSubmit={async (values, actions) => {
					try {
						if (id) {
							await updateTask(id, values);
							console.log(values);
						} else {
							const response = await createTask(values);
							actions.resetForm();
						}

						setTitle('');
						setDescription('');

						navigate('/');
					} catch (error) {
						console.log(error);
					}
				}}
			>
				{/* con handlechange podemos capturar los cambios en los inputs */}
				{/* values hace referencia a los valores de initial values */}
				{/* isSubmitting es para saber si se esta enviando los datos del form **/}
				{({ handleChange, handleSubmit, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							name='title'
							id='title'
							placeholder='write a title'
							onChange={handleChange}
							value={values.title}
							required
						/>

						<label htmlFor='description'>Description</label>
						<textarea
							type='text'
							name='description'
							id='description'
							placeholder='write a description'
							onChange={handleChange}
							value={values.description}
							required
						/>

						<button type='submit' disabled={isSubmitting}>
							{isSubmitting ? 'Saving' : 'Save'}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
