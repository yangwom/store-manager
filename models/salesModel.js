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

const createSaleProduct = async (productId, quantity) => {
const query = 'INSERT INTO sales_product (product_id,  quantity) values (?,?)';
const [data] = connection.execute(query, [productId, quantity]); 
return data;
};

const createSales = async (date) => {
const query = 'INSERT INTO sales (date) values (NOW())';
const [data] = connection.execute(query, [date]);
return data;
};

module.exports = {
    getAll,
    getById,
    createSaleProduct,
    createSales,
};