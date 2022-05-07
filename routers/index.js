const express = require('express');
const routerProducts = require('./products/index');

const router = express.Router();

router.use('/products', routerProducts);

module.exports = router;