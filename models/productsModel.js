const connection = require('./connection');

const getAll = async () => {
const query = 'SELECT * FROM StoreManager.products';
const [data] = await connection.execute(query);
return data;
};

const getById = async (id) => {
const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
const [data] = connection.execute(query, [id]);
return data.filter((product) => product === id);
};

module.exports = {
    getAll,
    getById,
};