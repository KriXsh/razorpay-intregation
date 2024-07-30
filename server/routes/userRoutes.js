const express = require('express');
const { getUserAmountController } = require('../controllers/userController');
const authenticate = require('../utils/authMiddleware');

const router = express.Router();

router.get('/amount', authenticate, getUserAmountController);

module.exports = router;
