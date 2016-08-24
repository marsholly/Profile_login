// this jwt secret MUST NOT BE COMMITTED!
// it should be kept as an env variable
const JWT_SECRET = 'q3w4de5frg6t7hyj8u9ki0u98y7t6r5e';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.statics.register = function(userObj, cb) {
  this.findOne({username: userObj.username}, (err, dbUser) => {
    if(err) return cb(err);
    if(dbUser) return cb({error: 'Username already taken.'});

    this.create(userObj, (err, newUser) => {
      cb(err);
    });
  });
};

userSchema.statics.authenticate = function(userObj, cb) {
  //  userObj --> 'login attempt'

  //  1.  check if user exists, and password is correct
  //  2.  create a token (JWT)
  //  3.  callback with token

  let { username, password } = userObj;

  this.findOne({ username }, (err, user) => {
    if(err || !user) {
      return cb(err || {error: 'Login failed.  Username or password incorrect.'});
    }

    if(user.password !== password) {
      return cb({error: 'Login failed.  Username or password incorrect.'});
    }

    let payload = {
      _id: user._id
    }

    jwt.sign(payload, JWT_SECRET, {}, cb);
  });
};



userSchema.statics.authMiddleware = function(req, res, next) {

//   // 1. read token from cookie
//   // 2. verify the token, decode the payload
//   // 3. find the user by id

//   // if token is good, we call next()
//   // if the token is bad or missing, we call res.status(401).send() 
//   //   and we end the request


  let token = req.cookies.authtoken;

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if(err) return res.status(401).send(err);

    mongoose.model('User')
      .findById(payload._id)
      .select('-password')
      .exec((err, user) => {
        if(err) return res.status(400).send(err);
        if(!user) return res.status(401).send({error: 'User not found.'});

        req.user = user;
        next();
      });
  });
}

const User = mongoose.model('User', userSchema);

module.exports = User;
