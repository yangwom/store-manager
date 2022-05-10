const express = require('express');
const controllers = require('../../controllers/salesControllers');

const routerSales = express.Router();

routerSales.get('/', controllers.getAll);

module.exports = routerSales;