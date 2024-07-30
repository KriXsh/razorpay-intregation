const { getUserAmount } = require('../services/userService');
const { successResponse, errorResponse } = require('../utils/responseHandler');

const getUserAmountController = async (req, res) => {
    try {
        const amount = await getUserAmount(req.user.id);
        successResponse(res, { amount }, "Amount retrieved successfully");
    } catch (error) {
        errorResponse(res, error.message, 404, "User not found");
    }
};

module.exports = {
    getUserAmountController,
};
