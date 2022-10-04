const routerMovie = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { getAllUserMovie } = require('../controllers/movies');
const { createMovie } = require('../controllers/movies');
const { deleteMovie } = require('../controllers/movies');

const { reg } = require('../constants');

routerMovie.get('/', getAllUserMovie);
routerMovie.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(reg),
    trailerLink: Joi.string().required().regex(reg),
    thumbnail: Joi.string().required().regex(reg),
    owner: Joi.string().alphanum().length(24).hex(),
    movieId: Joi.string().alphanum().length(24).hex(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovie);
routerMovie.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24).hex(),
  }),
}), deleteMovie);

module.exports = routerMovie;
