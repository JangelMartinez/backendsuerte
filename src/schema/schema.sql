DROP TABLE IF EXISTS orders;
CREATE TABLE orders (order_date TEXT, PRIMARY KEY (`order_date`));
INSERT INTO orders (order_date) VALUES ('11/03/2023 14:03'), ('11/03/2023 14:05'), ('11/03/2023 14:07');