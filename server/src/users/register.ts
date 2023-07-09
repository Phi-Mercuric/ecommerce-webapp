import { Response, request, Router } from 'express';
import { userSchema } from '../models/user.js';
import { db } from '../db.js';
import * as argon2 from 'argon2';
import debug from 'debug';

const dbg = debug('server:users');
const router = Router();

router.post('/register', async (req, res) => {
  dbg("New user registration ", req.body, "\n{");
  const { error } = userSchema.validate(req.body);
  if (error) {
    dbg("\tValidation error: ", error, "\n}");
    return res.status(400).send(error.details[0].message);
  }

  const { name, email, password } = req.body;

  const emails = await db.query('SELECT email FROM users WHERE email = $1', [email]);
  if (emails.rows.length > 0) {
    dbg("\tEmail already exists\n}")
    return res.status(400).send('Email already exists');
  }

  db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    [name,
      email,
      await argon2.hash(password).catch((e) => {
        console.log("Password hashing error ", e);
        return res.status(500).send('Internal Server Error');
      })
    ],

    (err, result) => {
      if (err) {
        if (err.name === 'ValidationError') {
          dbg("\tValidation error: ", err, "\n}");
          return res.status(400).send('Email already exists');
        } else {
          dbg("\tDatabase error: ", err, "\n}");
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
      }

      res.status(201).send('User created');
      dbg("\tUser created\n}");
    });
});

export default router;