const getAllModel = require('../models/productsModel');

const getAll = async () => {
const data = await getAllModel.getAll();

if (!data.length) return [];

 return data;
};

const getById = async (id) => {
const data = await getAllModel.getById(id);
return data;
};

module.exports = {
    getAll,
    getById,
};