const model = require('../models/salesModel');
const status = require('../status/status');

const getAll = async () => {
const data = await model.getAll();

if (!data.length) return [];

return data;
};

const getById = async (id) => {
const data = await model.getById(id);

if (!data.length) return status.productNotFound;

return data[0];
};

module.exports = {
getAll,
getById,
};