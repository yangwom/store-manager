const connection = require('./connection');

const getAll = async () => {
const query = 'SELECT * FROM StoreManager.products';
const [data] = await connection.execute(query);
return data;
};

const getById = async (id) => {
const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
const [data] = await connection.execute(query, [id]);
return data.find((product) => product.id === Number(id));
};

module.exports = {
    getAll,
    getById,
};