# Udacity Storefront Backend Project backend API build in Nodejs for an online store.
>## The Scripts nedded to test/satrt/build application:
>> - npm run dev
>> - npm run test
>> - npm run lint
>> - npm run lint:f => to fix issues
>> - npm run prettier

>## Used Technologies
>> - PostgreSQL for the database
>> - Node/Express for runtime and backend
>> - dotenv for managing environment variables
>> - db-migrate for migrations
>> - jsonwebtoken for authentication and authorizations
>> - jasmine for unit and endpoint testing
>> - bcrypt for hashing passwords

>## Getting Started
>> - clone the repo using 
// git clone https://github.com/nourabdelhakam/Store_Front.git
// cd Storefront
>> - install dependenscies
// npm install
>> - create databases
>>> - connect to the postgres database
// psql -U postgres -p 3010 postgres
>>> -  create the databases (dev and test)
// CREATE DATABASE store_dev;
// CREATE DATABASE store_test;
>> - run migrations
// db-migrate up
>> - run development server
// npm run dev
>> - run testing scripts
// npm run test

>## ENVIRONMENT VARIABLES
>> - PORT=3003
>> - NODE_ENV=dev
>> - POSTGRES_HOST=localhost
>> - POSTGRES_PORT=3010
>> - POSTGRES_DB=store_dev
>> - POSTGRES_DB_TEST=store_test
>> - POSTGRES_USER=postgres
>> - POSTGRES_PASSWORD=winston2030
>> - BCRYPT_PASSWORD= 12345678
>> - SALT_ROUNDS= 10
>> - TOKEN_SECRET= 123456

>## PORTS
>> - Backend is running on port 3003
>> - Database is running on port 3010

> ## Notes:
>> Prettier is used and no errors are detected by eslint.