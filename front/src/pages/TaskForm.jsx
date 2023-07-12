import { Formik, Form } from 'formik';
import { createTask } from '../api/tasks';

export const TaskForm = () => {
	return (
		<div>
			{/* Formik nos permite mantener el estado y nos evita estar usando estados*/}
			<Formik
				initialValues={{
					title: '',
					description: '',
				}}
				// con onsubmit le decimos que hacer cuando se envie el formulario
				onSubmit={async (values, actions) => {
					console.log(values);
					try {
						const response = await createTask(values);
						console.log(response);
						actions.resetForm();
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
