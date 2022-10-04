const routerUser = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { getUserInfo } = require('../controllers/users');
const { updateUserInfo } = require('../controllers/users');

routerUser.get('/me', getUserInfo);
routerUser.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
}), updateUserInfo);

module.exports = routerUser;
