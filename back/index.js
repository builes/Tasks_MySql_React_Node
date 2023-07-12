import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/indexRoutes.js';
import { PORT } from './config.js';

const app = express();

// morgan es un middleware que nos permite ver en consola las peticiones que llegan al servidor
app.use(morgan('dev'));

// express.json() y express.urlencoded() son middlewares
// que nos permiten recibir datos de un formulario en formato json o urlencoded
// y poder interpretarlos en el servidor como un objeto de javascript
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
