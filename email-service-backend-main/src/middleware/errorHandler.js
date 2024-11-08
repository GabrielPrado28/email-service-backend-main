// src/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);  // Log de erro para fins de depuração
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};

module.exports = errorHandler;
