const jwt = require('jsonwebtoken');
const { errorResponse } = require('./responseHandler');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return errorResponse(res, 'Access denied. No token provided.', 401);
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        return errorResponse(res, 'Invalid token.', 400);
    }
};

module.exports = authenticate;
