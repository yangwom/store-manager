const express = require('express');
const controllers = require('../../controllers/productsControllers');

const routeProducts = express.Router();

routeProducts.get('/products', controllers.getAll);

module.exports = routeProducts;