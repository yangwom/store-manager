const status = require('../status/status');

const nameIsRequired = '"name" is required';
const characters = '"name" length must be at least 5 characters long';
const quantityIsRequired = '"quantity" is required';
const canNotLower1 = '"quantity" must be greater than or equal to 1';
const productIdIsRequired = '"productId" is required';

const productMiddleware = (req, res, next) => {
    const { name, quantity } = req.body; 
    switch (true) {
    case !name: return next({ status: status.badRequest, message: nameIsRequired });
    case name.length < 5: return next({ status: status.Unprocessa, message: characters }); 
    case !quantity: return next({ status: status.badRequest, message: quantityIsRequired });
    case quantity <= 0: return next({ status: status.Unprocessa, message: canNotLower1 });
     default:
      next();
       }
    };

    const salesMiddleware = (req, res, next) => {
      const { productId, quantity } = req.body;
      switch (true) {
          case !quantity: return next({ status: status.badRequest, message: quantityIsRequired });
          case !productId: return next({ status: status.badRequest, message: productIdIsRequired });
          case quantity <= 0: return next({ status: status.Unprocessa, message: canNotLower1 });
       default:
           next();
      }
    };

module.exports = {
    productMiddleware,
    salesMiddleware,
};