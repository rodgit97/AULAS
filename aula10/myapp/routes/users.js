var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('responde com um recurso de utilizadores');
});

module.exports = router;
