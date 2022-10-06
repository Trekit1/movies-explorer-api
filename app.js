const express = require('express');

const mongoose = require('mongoose');

const helmet = require('helmet');

const cors = require('cors');

const { errors } = require('celebrate');

const { mongoURL } = require('./constants');

require('dotenv').config();

const app = express();
const { PORT = 3000, NODE_ENV, MONGO_URL } = process.env;

if (NODE_ENV === 'production') {
  mongoose.connect(MONGO_URL);
} else {
  mongoose.connect(mongoURL);
}

const errorHandling = require('./middlewares/errorHandling');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const router = require('./routes/index');

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
