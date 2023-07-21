import joi from 'joi';

export const userSchema = joi.object({
  username: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const authSchema = joi.object({
  username: joi.alternatives().try(
    joi.string().min(3).max(30),        // username
    joi.string().email()                // Email
  ),
  password: joi.string().required(),
});