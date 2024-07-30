const { createOrder, verifyPayment } = require('../services/paymentService');
const { successResponse, errorResponse } = require('../utils/responseHandler');

const createOrderController = async (req, res) => {
    try {
        const order = await createOrder(req.body.amount, req.user.id);
        successResponse(res, order);
    } catch (error) {
        errorResponse(res, error.message);
    }
};

const verifyPaymentController = (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const isValid = verifyPayment(razorpay_order_id, razorpay_payment_id, razorpay_signature);
    if (isValid) {
        successResponse(res, { status: "success" });
    } else {
        errorResponse(res, "Invalid signature");
    }
};

module.exports = {
    createOrderController,
    verifyPaymentController
};
