const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/register', (req, res) => {
  //  POST /api/users/register
  //  req.body ---> { username: 'bob', password: 'secure' }

  User.register(req.body, err => {
    // check if username is taken (username is unique)
    // create the user document

    res.status(err ? 400 : 200).send(err);
  });
});



router.post('/login', (req, res) => {
  //  req.body ---> { username: 'bob', password: 'secure' }
  //  'login attempt'

  //  1.  check if user exists, and password is correct
  //  2.  create a token (JWT)
  //  3.  set the token in a cookie


  User.authenticate(req.body, (err, token) => {
    res.status(err ? 400 : 200).send(err || token);
  });
})




module.exports = router;
