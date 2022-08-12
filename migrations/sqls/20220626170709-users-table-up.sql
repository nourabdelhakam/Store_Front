/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(150),
    lastname VARCHAR(200),
    password VARCHAR
);
