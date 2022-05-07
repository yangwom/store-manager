const connection = require('./connection');

const getAll = async () => {
const query = 'SELECT * FROM StoreManager.products';
const [data] = await connection.execute(query);
return data;
};

module.exports = {
    getAll,
};