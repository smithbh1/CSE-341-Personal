const routes = require('express').Router();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());


// routes.get('/api-docs');
routes.get('/', (req, res) =>{
    res.send('Josh Dart')
});
// routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// routes.use('/contacts', require('./contacts'));

module.exports = routes;