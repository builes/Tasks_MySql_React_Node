import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes.js';
import taskRoutes from './routes/tasksRoutes.js';

import { PORT } from './config.js';

const app = express();

// cors es un middleware que nos permite hacer peticiones desde un servidor a otro
app.use(cors());

// morgan es un middleware que nos permite ver en consola las peticiones que llegan al servidor
app.use(morgan('dev'));

// express.json() y express.urlencoded() son middlewares
// que nos permiten recibir datos de un formulario en formato json o urlencoded
// y poder interpretarlos en el servidor como un objeto de javascript
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(indexRoutes);
app.use('/api', taskRoutes);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
