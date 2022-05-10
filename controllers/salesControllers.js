const servicesGetAll = require('../services/salesServices');
const status = require('../status/status');

const getAll = async (req, res, next) => {
const data = await servicesGetAll.getAll();
try {
  res.status(status.success).json(data);
} catch (err) {
    next(err);
}
};