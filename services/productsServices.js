const model = require('../models/productsModel');
const status = require('../status/status');

const getAll = async () => {
const data = await model.getAll();

if (!data.length) return [];

 return data;
};

const getById = async (id) => {
const data = await model.getById(id);

if (!data.length) throw status.productNotFound;

return data[0];
};

const create = async (name, quantity) => {
const productsAll = await model.getAll();

const exists = productsAll.some((product) => (product.name === name));

if (exists) throw status.errorConflict;

const data = await model.create(name, quantity);

return data;
};

const update = async (id, name, quantity) => {
const exists = await model.getById(id);

if (!exists[0]) throw status.productNotFound;

 await model.update(id, name, quantity);

return {
id, 
name,
quantity,
};
};

module.exports = {
    getAll,
    getById,
    create,
    update,
};