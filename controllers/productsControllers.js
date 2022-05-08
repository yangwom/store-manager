const services = require('../services/productsServices');
const status = require('../middlewares/status');

const getAll = async (req, res, next) => {
 try {
      const data = await services.getAll();
      return res.status(status.sucess).json(data);
    } catch (err) {
        next(err);
 }
};

const getById = async (req, res, next) => {
const { id } = req.params;

try {
    const data = await services.getById(id);
    return res.status(status.sucess).json(data);
} catch (err) {
    next(err);
}
};

module.exports = {
    getAll,
    getById,
};