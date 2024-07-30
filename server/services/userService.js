const User = require('../models/userModel');

const getUserAmount = async (userId) => {
    const user = await User.findById(userId).select('amount');
    if (!user) {
        throw new Error('User not found');
    }
    return user.amount;
};

module.exports = {
    getUserAmount,
};
