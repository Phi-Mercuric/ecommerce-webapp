import { Response, request, Router } from 'express';
import { userSchema } from '../models/user.js';
import { db } from '../db.js';
import * as argon2 from 'argon2';

const router = Router();

router.post('/register', async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, email, password } = req.body;

  let hashedpasswd: string;
  try {
    hashedpasswd = await argon2.hash(password);
  } catch (e) {
    console.log("Password hashing error ", e);
    return res.status(500).send('Internal Server Error');
  }

  db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashedpasswd], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(201).send('User created');
    console.log(result);
  });
});

export default router;