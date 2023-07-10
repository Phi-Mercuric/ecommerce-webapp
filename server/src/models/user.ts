import joi from 'joi';

export const userSchema = joi.object({
  username: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const authSchema = joi.object({
  username: joi.string().email().required(),
  password: joi.string().required(),
});