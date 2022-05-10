const modelGetAll = require('../models/salesModel');

const getAll = () => {
const data = modelGetAll.getAll();

if (!data.length) return [];

return data;
};

module.exports = {
getAll,
};