USE StoreManager;

SELECT * FROM products;

SELECT * FROM sales;

SELECT * FROM sales_products;

SELECT 
sp.sale_id,
sa.date,
sp.product_id,
sp.quantity
FROM  sales_products AS sp
JOIN sales AS sa ON sa.id = sp.sale_id;

