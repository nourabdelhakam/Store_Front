/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    price integer,
    category VARCHAR(200)
);