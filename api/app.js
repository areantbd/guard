require('dotenv').config()

const createError = require("http-errors");
const express = require("express");
const logger = require('morgan')

require('./config/db.config')

const app = express();

app.use(express.json())
app.use(logger('dev'))

const routes = require('./config/routes.config');
const { default: mongoose } = require('mongoose');
app.use('/api/v1', routes)

app.use((req, res, next) => next(createError(404, "Route not found")));
app.use((error, req, res, next) => {
  // console.log(error);
  const status = error.status || 500;

  const data = {}

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400)
    data.errors = error.errors
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, "Resource not found")
  }

  data.message = error.message;
  res.status(error.status)
  res.json(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Guardería API running on port ${port}`));
