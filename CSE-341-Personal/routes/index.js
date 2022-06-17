const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const bodyParser = require('body-parser');
const { requiresAuth } = require('express-openid-connect');
const { route } = require('./journal');


routes.use(bodyParser.json());


routes.get('/api-docs');
routes.get('/', (req, res) =>{
    res.send('Add in /api-docs in the url to see the SwaggerUI')
});

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/journal', requiresAuth(), require('./journal'));
routes.use('/journal-count', require('./journal-count'));

module.exports = routes;