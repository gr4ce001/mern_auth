const express = require('express');
const { signout, google, signin, signup } = require('../controllers/authCtrl');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', signout);

module.exports = router