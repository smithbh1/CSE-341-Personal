const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());


routes.get('/api-docs');
routes.get('/', (req, res) =>{
    res.send('Add in /api-docs in the url to see the SwaggerUI')
});
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/journal', require('./journal'));

module.exports = routes;