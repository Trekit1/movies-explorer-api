const express = require('express');

const mongoose = require('mongoose');

const { errors } = require('celebrate');

mongoose.connect('mongodb://localhost:27017/moviesdb');

const cors = require('cors');

require('dotenv').config();

const app = express();
const { PORT = 3000 } = process.env;

const errorHandling = require('./middlewares/errorHandling');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const router = require('./routes/index');

app.use(express.json());

app.use(cors());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
