const model = require('../models/salesModel');
const status = require('../status/status');

const getAll = async () => {
  const data = await model.getAll();

  return data;
};

const getById = async (id) => {
  const data = await model.getById(id);

  if (!data.length) throw status.saleNotFound;

  return data;
};

const createSales = async (array) => {
  const { id } = await model.createSales();
  await Promise.all(array.map(({ productId, quantity }) => model
    .createSaleProduct(id, productId, quantity)));
  return {
    id,
    itemsSold: [
      ...array,
    ],
  };
};

const saleById = async (id, array) => {
  await Promise.all(array.map(({ productId, quantity }) => model
    .updateById(id, productId, quantity)));

  return {
    saleId: Number(id),
    itemUpdated: [
      ...array,
    ],
  };
};

module.exports = {
  getAll,
  getById,
  createSales,
  saleById,
};