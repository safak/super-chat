const Joi = require("@hapi/joi");

const registerValidation = () => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).required().email(),
    password: Joi.string().min(6).required(),
  });
};
