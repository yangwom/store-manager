const getAllModel = require('../models/productsModel');

const getAll = async () => {
const data = await getAllModel.getAll();

if (!data) return { messsage: [] };

 return data;
};

module.exports = {
    getAll,
};