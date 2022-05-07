const connection = require('./connection');

const getAll = async () => {
const query = 'SELECT * FROM StoreManager';
const [data] = connection.execute(query);
return data;
};

module.exports = {
    getAll,
};