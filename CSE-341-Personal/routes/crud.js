const mongodb = require('../connection');
const ObjectId = require('mongodb').ObjectId;

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
  const updateJournal = async (req, res) => {
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
    const response = await mongodb.getCollection('journal').replaceOne({ _id: userId }, journal);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  };
  
  const deleteJournal = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getCollection('journal').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
  };
  module.exports = { createJournal, updateJournal, deleteJournal }