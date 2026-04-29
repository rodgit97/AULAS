const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.index);
router.get('/:bookId', bookController.show);
router.get('/', bookController.store);


module.exports = router;