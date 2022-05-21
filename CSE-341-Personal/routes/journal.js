const routes = require('express').Router();
const connectDB = require('../connection');
const crud = require('./crud');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());

routes.get('/', (req, res) =>{

    const results = connectDB.getCollection("journal").find();

    results.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log("Returned All journal entries")
    });
   
});

routes.post('/', crud.createJournal);

module.exports = routes;