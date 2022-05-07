const express = require('express');

const routeProducts = express.Router();

routeProducts.get('/products', getAll);

module.exports = routeProducts;