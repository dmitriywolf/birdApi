const express = require('express');
const birdRouter = require('./routers/birdRouter');

const app = express();

const jsonParser = express.json();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'DELETE', 'POST']);
  next();
});

app.use(jsonParser);

app.use('/api/birds', birdRouter);

module.exports = app;
