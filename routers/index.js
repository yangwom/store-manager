const express = require('express');
const routerProducts = require('./products/index');
const routerSales = require('./sales/index');

const router = express.Router();

router.use('/products', routerProducts);
router.use('/sales', routerSales);

module.exports = router;