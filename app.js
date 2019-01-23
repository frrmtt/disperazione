const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Hello World! that is the faching homepage').status(200));


module.exports = app;