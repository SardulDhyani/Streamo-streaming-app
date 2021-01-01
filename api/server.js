const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require ('dotenv').config();

const streamRoutes = require('./routes/streams');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cors());
app.use(streamRoutes);

const db = require('./config/db.config')(app);

db.connect();