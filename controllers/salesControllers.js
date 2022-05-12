const services = require('../services/salesServices');
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

const createSales = async (req, res, next) => {
    try {
        const data = await services.createSales(req.body);
        return res.status(status.created).json(data);
    } catch (err) {
  next(err);
    }
};

const updateById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const data = await services.saleById(id, req.body);
        return res.status(status.success).json(data);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAll,
    getById,
    createSales,
    updateById,
};