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

const create = async (req, res, next) => {
const { name, quantity } = req.body;
try {
    const data = await services.create(name, quantity);
    return res.status(status.created).json(data);
} catch (err) {
    next(err);
}
};

module.exports = {
    getAll,
    getById,
    create,
};