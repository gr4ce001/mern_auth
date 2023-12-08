const express = require('express');
const { createUser } = require('../controllers/userCtrl');
const router = express.Router();

router.post('/signup',createUser)

module.exports = router;