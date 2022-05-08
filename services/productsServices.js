const getAllModel = require('../models/productsModel');
const product = require('../middlewares/throwMenssage');

const getAll = async () => {
const data = await getAllModel.getAll();

if (!data.length) return [];

 return data;
};

const getById = async (id) => {
const data = await getAllModel.getById(id);
if (!data) throw product.productNotFound;
return data;
};

module.exports = {
    getAll,
    getById,
};