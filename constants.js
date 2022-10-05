const { celebrate, Joi } = require('celebrate');

const reg = /https?:\/\/(www\.)?([a-zA-Z0-9-._~:/?#@!$&'()+,;=]*)\.([a-zA-Z])#?/;

const celebrateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const celebrateUpdateInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const celebrateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const celebrateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24).hex(),
  }),
});

const celebrateCreateMovie = celebrate({
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
});

module.exports = {
  reg,
  celebrateUpdateInfo,
  celebrateLogin,
  celebrateCreateUser,
  celebrateDeleteMovie,
  celebrateCreateMovie,
};
