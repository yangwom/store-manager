const model = require('../models/salesModel');
const status = require('../status/status');

const getAll = async () => {
const data = await model.getAll();

if (!data.length) return [];

return data;
};

const getById = async (id) => {
const data = await model.getById(id);

if (!data.length) throw status.saleNotFound;

return data;
};

module.exports = {
getAll,
getById,
};