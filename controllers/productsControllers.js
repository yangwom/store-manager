const services = require('../services/productsServices');

const getAll = async (req, res) => {
const data = await services.getAll();
return res.status(200).json(data);
};

module.exports = {
    getAll,
};