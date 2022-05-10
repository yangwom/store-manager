const express = require('express');
const controllers = require('../../controllers/salesControllers');

const routerSales = express.Router();

routerSales.get('/', controllers.getAll);
routerSales.get('/:id', controllers.getById);

module.exports = routerSales;