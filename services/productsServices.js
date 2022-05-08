const getAllModel = require('../models/productsModel');
const error = require('../status/status');

const getAll = async () => {
const data = await getAllModel.getAll();

if (!data.length) return [];

 return data;
};

const getById = async (id) => {
const data = await getAllModel.getById(id);
if (!data) throw error.productNotFound;
return data;
};

module.exports = {
    getAll,
    getById,
};