const connection = require('./connection');

const getAll = async () => {
const query = 'SELECT * FROM StoreManager.products';
const [data] = await connection.execute(query);
return data;
};

const getById = async (id) => {
const query = 'SELECT * FROM StoreManager.products WHERE id = ?  ';
const [data] = await connection.execute(query, [id]);
return data;
};

const create = async (name, quantity) => {
const query = 'INSERT INTO products (name, quantity) values(?,?)';
const [data] = await connection.execute(query, [name, quantity]);
return {
    id: data.insertId,
    name,
    quantity,
};
};

module.exports = {
    getAll,
    getById,
    create,
};