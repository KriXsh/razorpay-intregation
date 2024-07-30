const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const generateToken = (user) => {
    const payload = { id: user.id, email: user.email };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const validateUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return null;
    }
    return user;
};

module.exports = {
    generateToken,
    createUser,
    validateUser
};
