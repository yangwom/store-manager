const status = require('../status/status');

const errorMiddlewares = (err, req, res, _next) => {
    if (err.status) return res.status(err.status).json({ message: err.message });
    return res.status(status.internalServerError).json({ message: err.message });
};

module.exports = errorMiddlewares;