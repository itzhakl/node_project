import express from 'express';
import morgan from 'morgan';
import routes from './routes/routes.js';

const app = express();

app.use('/products', routes);

app.use('/products', routes, morgan('combined'));



app.listen(3000, () => {
    console.log(`Server is up and running on port:${3000}`);
});



