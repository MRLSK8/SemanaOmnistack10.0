const express = require('express');
const PORT = process.env.PORT || 3333;
const mongoose = require('mongoose');
const { url, flags } = require('../config/database');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.Server(app);

const { setUpWebsocket } = require('./websocket');
setUpWebsocket(server);

mongoose.connect(url, flags);

app.use(express.json());

app.use(cors());

app.use(routes);

server.listen(PORT, () => {
  console.log('Running on PORT: ', PORT)
});
