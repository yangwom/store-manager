const express = require('express');
const controllers = require('../../controllers/productsControllers');
const productMiddleware = require('../../middlewares/validateMiddleware');

const routerProducts = express.Router();

routerProducts.get('/', controllers.getAll);
routerProducts.get('/:id', controllers.getById);
routerProducts.post('/', productMiddleware, (req, res) => res.status(200).send('eitaaa'));

module.exports = routerProducts;