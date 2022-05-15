const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT sp.sale_id AS saleId,
sa.date,
sp.product_id AS productId,
sp.quantity
FROM sales_products AS sp
JOIN sales AS sa ON sa.id = sp.sale_id`;
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const query = `
    SELECT
    sa.date,
    sp.product_id AS productId,
    sp.quantity
    FROM sales_products AS sp
    JOIN sales AS sa ON sa.id = sp.sale_id WHERE sa.id = ?`;
  const [data] = await connection.execute(query, [id]);
  return data;
};

const createSaleProduct = async (id, productId, quantity) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id,  quantity) values (?,?,?)';
  await connection.execute(query, [id, productId, quantity]);
};

const createSales = async () => {
  const query = 'INSERT INTO sales (date) values (NOW())';
  const [data] = await connection.execute(query);
  return {
    id: data.insertId,
  };
};

const deleteByid = async (id) => {
  const query = 'DELETE FROM sales_products WHERE sale_id = ?';
  await connection.execute(query, [id]);
};

const updateById = async (id, productId, quantity) => {
  const query = 'UPDATE sales_products SET product_id = ?, quantity = ? WHERE sale_id = ?';
  await connection.execute(query, [productId, quantity, id]);
};

module.exports = {
  getAll,
  getById,
  createSaleProduct,
  createSales,
  updateById,
  deleteByid,

};