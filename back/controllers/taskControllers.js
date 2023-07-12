export const getTasks = async (req, res) => {
	// const tasks = await Task.findAll();
	res.json('getting tasks');
};

export const getTask = async (req, res) => {
	// const tasks = await Task.findAll();
	res.json('getting task');
};

export const createTask = async (req, res) => {
	// const tasks = await Task.findAll();
	res.json('creating task');
};

export const updateTask = async (req, res) => {
	// const tasks = await Task.findAll();
	res.json('updating task');
};

export const deleteTask = async (req, res) => {
	// const tasks = await Task.findAll();
	res.json('deleting task');
};
