const success = 200;
const notFound = 404;
const badRequest = 400;
const internalServerError = 500;
const productNotFound = { status: notFound, message: 'Product not found' };

module.exports = {
success,
notFound,
badRequest,
internalServerError,
productNotFound,
};