const getAllModel = require('../models/productsModel');
const status = require('../status/status');

const getAll = async () => {
const data = await getAllModel.getAll();

if (!data.length) return [];

 return data;
};

const getById = async (id) => {
const data = await getAllModel.getById(id);

if (!data.length) throw status.productNotFound;

return data[0];
};

const create = async (name, quantity) => {
const data = await getAllModel.create(name, quantity);

if (!data) throw status.errorConflict;

return data;
};

module.exports = {
    getAll,
    getById,
    create,
};