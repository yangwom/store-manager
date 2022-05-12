const express = require('express');
const controllers = require('../../controllers/productsControllers');
const validateMiddleware = require('../../middlewares/validateMiddleware');

const routerProducts = express.Router();

routerProducts.get('/', controllers.getAll);
routerProducts.get('/:id', controllers.getById);
routerProducts.post('/', validateMiddleware.productMiddleware, controllers.create);
routerProducts.put('/:id', validateMiddleware.productMiddleware, controllers.update);
routerProducts.delete('/:id', validateMiddleware.productMiddleware, controllers.deleteById);

module.exports = routerProducts;