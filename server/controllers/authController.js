const { generateToken, createUser, validateUser } = require('../services/authService');
const { successResponse, errorResponse } = require('../utils/responseHandler');

const registerController = async (req, res) => {
    try {
        const user = await createUser(req.body);
        const token = generateToken(user);
        successResponse(res, { token, user }, "User registered successfully");
    } catch (error) {
        errorResponse(res, error.message);
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await validateUser(email, password);
        if (!user) {
            return errorResponse(res, 'Invalid email or password', 404, "Invalid email or password");
        }
        const token = generateToken(user);
        successResponse(res, { token, user }, "Login successful");
    } catch (error) {
        errorResponse(res, error.message);
    }
};

module.exports = {
    registerController,
    loginController
};
