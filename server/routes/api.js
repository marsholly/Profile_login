const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
// router.use('/people', require('./people'));

module.exports = router;
