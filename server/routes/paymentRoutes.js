const express = require('express');
const { createOrderController, verifyPaymentController } = require('../controllers/paymentController');
const authenticate = require('../utils/authMiddleware');

const router = express.Router();

router.post('/create-order', authenticate, createOrderController);
router.post('/verify-payment', authenticate, verifyPaymentController);

module.exports = router;
