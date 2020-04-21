const express = require('express');

const app = express();
app.use(express.json());
require('./routes/routes')(app);

const db = require('./config/db.config');


app.set('port', process.env.PORT || 3500);





module.exports = app;