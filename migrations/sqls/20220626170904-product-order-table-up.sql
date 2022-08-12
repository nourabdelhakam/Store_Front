/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS product_order (
    id SERIAL PRIMARY KEY,
    quantity integer NOT NULL,
    order_id integer REFERENCES orders(id),
    product_id integer REFERENCES products(id) 
);