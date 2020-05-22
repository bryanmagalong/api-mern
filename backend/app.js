const express = require('express');
const mongoose = require('mongoose');
require ('dotenv/config');

const app = express();

//== Routes import
const mainRoute = require('./routes/main');

app.use('/', mainRoute);

//== DB connection
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    dbName: 'restAPI',
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(() => console.log('Connection to db succeeded !'))
  .catch(() => console.log('Connection to db failed !'));

//== Port
app.listen(3000);