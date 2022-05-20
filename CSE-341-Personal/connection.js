const dotenv = require('dotenv');
dotenv.config()

const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;

const initDatabase = () => {

    const URI = process.env.MONGO_DB;
    MongoClient.connect(URI, (err, client) => {
        if(err) throw err;
        _client = client;
        _collection = client.db("journal").collection("journal");
        console.log("DB Connected Successfully")
});
};
const getCollection = () => {
    return _collection;
}



module.exports = { initDatabase, getCollection };