const connection = require('./connection');

const getAll = async () => {
const query = `sp.sale_id,
sa.date,
sp.product_id,
sp.quantity
FROM sales_products AS sp
JOIN sales AS sa ON sa.id = sp.sale_id;`;
const [data] = await connection.execute(query);
return data;
};

module.exports = {
    getAll,
};