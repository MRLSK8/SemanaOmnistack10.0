const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const mongoose = require('mongoose');
const { url, flags } = require('../config/database');
const routes = require('./routes');

mongoose.connect(url, flags);

app.use(express.json());

app.use(routes);

app.listen(PORT);
