const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats');

router.get('/', catsCtrl.getAllCats);
router.get('/:id', catsCtrl.getSingleCat);
router.get('/new', catsCtrl.showNewForm);
router.post('/cat', catsCtrl.createNewCat);

module.exports = router;
