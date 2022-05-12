const express = require('express');
const controllers = require('../../controllers/salesControllers');
const validateMiddleware = require('../../middlewares/validateMiddleware');

const routerSales = express.Router();

routerSales.get('/', controllers.getAll);
routerSales.get('/:id', controllers.getById);
routerSales.post('/', validateMiddleware.salesMiddleware, controllers.createSales);
routerSales.put('/:id', validateMiddleware.salesMiddleware,
 (req, res) => res.status(200).send('deu certo'));

module.exports = routerSales;