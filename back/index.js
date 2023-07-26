import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import indexRoutes from './routes/indexRoutes.js';
import taskRoutes from './routes/tasksRoutes.js';

import { PORT } from './config.js';

const app = express();

// __dirname nos dice en que directorio estamos trabajando
const __dirname = dirname(fileURLToPath(import.meta.url));

// cors es un middleware que nos permite hacer peticiones desde un servidor a otro
app.use(cors());

// morgan es un middleware que nos permite ver en consola las peticiones que llegan al servidor
app.use(morgan('dev'));

// express.json() y express.urlencoded() son middlewares
// que nos permiten recibir datos de un formulario en formato json o urlencoded
// y poder interpretarlos en el servidor como un objeto de javascript
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Con esto le decimos a express que la carpeta public es de acceso publico
app.use(express.static(join(__dirname, '../front/dist')));

// routes
app.use(indexRoutes);
app.use('/api', taskRoutes);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
