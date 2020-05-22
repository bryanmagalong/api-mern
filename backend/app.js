const express = require('express');
const mongoose = require('mongoose');
require ('dotenv/config');

const app = express();

//== Routes
app.get('/', (req, res) => {
    res.send('Hello World !');
});

//== Port
app.listen(3000);