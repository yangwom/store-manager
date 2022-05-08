const getAllModel = require('../models/productsModel');

const getAll = async () => {
const data = await getAllModel.getAll();

if (!data.length) return [];

 return data;
};

module.exports = {
    getAll,
};