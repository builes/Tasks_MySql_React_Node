import { createContext, useState } from 'react';

export const TaskContext = createContext();

// Cualquier componente que este dentro de este provider va a tener acceso al state global
export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	// En value se puede pasar cualquier cosa que se quiera compartir con los demas componentes
	return (
		<TaskContext.Provider value={{ tasks, setTasks }}>
			{children}
		</TaskContext.Provider>
	);
};
