const express = require('express');
const routes = require('./routes/routes.js')
const app = express();
const morgan = require('morgan')

app.use('/products', routes);

app.use(morgan('combined'));

app.listen(3000, () => {
    console.log(`Server is up and running on port:${3000}`);
});



