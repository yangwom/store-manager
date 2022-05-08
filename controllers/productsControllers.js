const services = require('../services/productsServices');
const status = require('../status/status');

const getAll = async (req, res, next) => {
 try {
      const data = await services.getAll();
      return res.status(status.success).json(data);
    } catch (err) {
        next(err);
 }
};

const getById = async (req, res, next) => {
const { id } = req.params;

try {
    const data = await services.getById(id);
    return res.status(status.success).json(data);
} catch (err) {
    next(err);
}
};

module.exports = {
    getAll,
    getById,
};