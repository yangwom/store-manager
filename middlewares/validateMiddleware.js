const status = require('../status/status');

const productMiddleware = (req, res, next) => {
    const { name, quantity } = req.body; 
    switch (true) {
        case !name: return next({ status: status.badRequest, message: '"name is required"',
        });
        
        case name.length < 5: return next({ status: status.UnprocessableEntity, 
           message: '"name" length must be at least 5 characters long"',
         }); 
        case !quantity: return next({ status: status.badRequest,
              message: '"quantity is required"' });
        case quantity <= 0: return next({ status: status.UnprocessableEntity,
        message: '"quantity" must be greater than or equal to 1' });
           default:
             next();
       }
    };

module.exports = productMiddleware;