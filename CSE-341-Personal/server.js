const express = require('express');
const connectDB = require('./connection');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
connectDB.initDatabase();

app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Running on port ${port}`)
});

