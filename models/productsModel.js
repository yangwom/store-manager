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

const getProductByName = async (name) => {
    const [productName] = await connection.execute(
      'SELECT * FROM StoreManager.products WHERE name = ?',
    [name],
    );
    return productName[0];
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

const update = async (id, name, quantity) => {
 const query = 'UPDATE products SET name = ?, quantity = ? WHERE id = ?';
 const [data] = await connection.execute(query, [name, quantity, id]);
 return data;
};

const productDelete = async (id) => {
const query = 'DELETE FROM products WHERE id = ?';
const [data] = await connection.execute(query, [id]);
return data;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    productDelete,
    getProductByName,
};