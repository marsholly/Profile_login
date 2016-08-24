const jwt = require('jsonwebtoken');


let payload = {
  color: 'purple',
  number: 123,
  bool: false
};

let secret = 'zx4ed5cfr6gtv7ybh8unj9imNU*BY&GVT^FCR%Dxrcf6tgv7ybh8ujn9UBH*YVG&Tcf6rd5xrcf6tvg7ybh8ubyv7gtcrxdrcftvgybhunhbgvftcd'



// jwt.sign(payload, secret, {expiresIn: '1 hour'}, (err, token) => {
//   console.log('err:', err);
//   console.log('token:', token);
// })


let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xvciI6InB1cnBsZSIsIm51bWJlciI6MTIzLCJib29sIjpmYWxzZSwiaWF0IjoxNDcyMDY0NjU5LCJleHAiOjE0NzIwNjgyNTl9.PLvAOaHX2subche11WN4fVuakrHedcOY_NckK9EJ1MI'


jwt.verify(token, secret, (err, payload) => {

  console.log('err:', err);
  console.log('payload:', payload);

})
