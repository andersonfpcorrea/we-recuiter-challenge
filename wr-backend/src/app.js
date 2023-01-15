const express = require('express');
const cors = require('cors');
const router = require('./router');
require('express-async-errors');

const app = express();

app.use(cors()).use(express.json());
app.options('*', cors());

app.use('/api', router);

app.use((err, req, res, _next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = app;
