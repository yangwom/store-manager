const express = require('express');

const routerSales = express.Router();

routerSales.get('/');
routerSales.get('/:id');