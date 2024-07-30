const successResponse = (res, data, message = "Request successful") => {
    res.status(200).json({
        success: true,
        message: message,
        data: data,
    });
};

const errorResponse = (res, message, status = 500, userMessage = "An error occurred") => {
    res.status(status).json({
        success: false,
        message: userMessage,
        error: message,
    });
};

module.exports = {
    successResponse,
    errorResponse
};
