const servicesGetAll = require('../services/salesServices');
const status = require('../status/status');

const getAll = async (req, res, next) => {
try {
 const data = await servicesGetAll.getAll();
 return res.status(status.success).json(data);
} catch (err) {
    next(err);
}
};