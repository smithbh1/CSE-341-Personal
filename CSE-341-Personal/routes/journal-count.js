const routes = require('express').Router();
const connectDB = require('../connection');
const bodyParser = require('body-parser');
const cors = require('cors');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended:true }));
routes.use(cors());

routes.get('/', (req, res) => {
    const collection = connectDB.getCollection("journal");
    collection.countDocuments().then((countDocuments) => {
        res.send(`You have made ${countDocuments} journal entries.`)
    }).catch((err) => {
        console.log(err.Message);
    })
        
});

module.exports = routes;