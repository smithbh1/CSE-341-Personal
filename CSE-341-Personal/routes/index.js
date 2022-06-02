const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

require('../passport')(passport);

routes.use(bodyParser.json());


routes.get('/api-docs');
routes.get('/', (req, res) =>{
    res.send('Add in /api-docs in the url to see the SwaggerUI')
});
routes.use(session({
    secret: 'journal entry',
    resave: false,
    saveUninitialized: false
}))
routes.use(passport.initialize())
routes.use(passport.session())
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/journal', require('./journal'));
routes.use('/auth', require('./auth'));

module.exports = routes;