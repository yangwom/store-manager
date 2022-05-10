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
    JOIN sales AS sa ON sa.id = sp.sale_id WHERE id = ?`;
    const [data] = await connection.execute(query, [id]);
    return data;
};

module.exports = {
    getAll,
    getById,
};