const mongodb = require('../connection');
 

const createJournal = async (req, res) => {
    const journal = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      date: req.body.date,
      quote: req.body.quote,
      entry: req.body.entry,
      goalsComplete : req.body.goalsComplete,
      goalsToDo: req.body.goalsToDo
    };
    const response = await mongodb.getCollection('journal').insertOne(journal);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the journal.');
    }
  };

  module.exports = { createJournal }