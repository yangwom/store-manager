const express = require('express');
const controllers = require('../../controllers/productsControllers');

const routerProducts = express.Router();

routerProducts.get('/', controllers.getAll);
routerProducts.get('/:id', controllers.getById);

module.exports = routerProducts;