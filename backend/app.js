const express = require('express');
const mongoose = require('mongoose');
require ('dotenv/config');

const app = express();

//== Routes import
const mainRoute = require('./routes/main');
const experiencesRoute = require('./routes/experiences');

// body requests parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', mainRoute);
app.use('/api/experiences', experiencesRoute);

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