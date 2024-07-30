const razorpayInstance = require('../config/razorpayConfig');
const crypto = require('crypto');
const User = require('../models/userModel');

const createOrder = async (amount, userId) => {
    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: "receipt#1",
    };
    const order = await razorpayInstance.orders.create(options);
    
    // Update user's amount in the database
    const user = await User.findById(userId);
    if (user) {
        user.amount += amount;
        await user.save();
    }
    
    return order;
};

const verifyPayment = (orderId, paymentId, signature) => {
    const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    shasum.update(orderId + "|" + paymentId);
    const digest = shasum.digest("hex");
    return digest === signature;
};

module.exports = {
    createOrder,
    verifyPayment
};
