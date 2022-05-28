const routes = require('express').Router();
const connectDB = require('../connection');
const crud = require('./crud');
const bodyParser = require('body-parser');
const { journalEntryValidation, results } = require('./validation');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended:true }));
routes.use(cors())

routes.get('/', (req, res) =>{

    const results = connectDB.getCollection("journal").find();

    results.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log("Returned All journal entries")
    });
   
});
// routes.post('/', crud.createJournal);
routes.post('/', journalEntryValidation, (req, res) =>
{
    // crud.createJournal
    const journal = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: req.body.date,
        quote: req.body.quote,
        entry: req.body.entry,
        goalsComplete : req.body.goalsComplete,
        goalsToDo: req.body.goalsToDo
      };
      const _result = results(req);
      if(!_result.isEmpty()){
          return res.status(400).json({ errors: _result.array() })
      };
      connectDB.getCollection('journal').insertOne(journal)
      .then(result => {
          console.log(result);
          res.status(201).json(`New ID: ${result.instertedId}`);
      })
      .catch(error =>{
          console.log(error);
          res.status(500).json()
      })
      
});
routes.put('/:id', journalEntryValidation, (req, res) =>
{
    const userId = new ObjectId(req.params.id);
    
    const journal = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: req.body.date,
        quote: req.body.quote,
        entry: req.body.entry,
        goalsComplete : req.body.goalsComplete,
        goalsToDo: req.body.goalsToDo
      };
    const _result = results(req);
    if(!_result.isEmpty()){
          return res.status(400).json({ errors: _result.array() })
      };
    connectDB.getCollection('journal').replaceOne({ _id: userId }, journal)
    .then(result => {
        console.log(result);
        res.status(201).json(`Successfully Edited!`);
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json()
    })
});

routes.delete('/:id', crud.deleteJournal);

module.exports = routes;