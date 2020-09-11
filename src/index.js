const express = require('express');
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

requireDir('./models');

app.use('/api', require('./routes'));

app.listen(port);