# Udacity Storefront Backend Project
>## API Endpoints
>### Users
>> - all_users '/users' [GET]
>> - show_user_by_id '/users/:id' [GET]
>> - create_user '/users' [POST]
>> - delete_user '/users/:id' [DELETE]
>### Products
>> - all_products '/products' [GET]
>> - show_product_by_id '/products/:id' [GET]
>> - show_product_by_category '/products/category/:category' [GET]
>> - create_product '/products' [POST]
>> - delete_product '/products/:id' [DELETE]
>### Orders
>> - all_orders '/orders' [GET]
>> - show_order_by_id 'orders/latest/:user_id' [GET]
>> - show_order_by_status '/orders/:status [GET]
>> - create_order '/orders' [POST]
>> - delete_order '/orders/:id' [DELETE]

>## Data Shapes

>### User
>> - id
>> - first_name
>> - last_name
>> - password
>>> TABLE users ( id SERIAL PRIMARY KEY, first_name VARCHAR(150), last_name VARCHAR(200), password VARCHAR(100) )

>### Product
>> - id
>> - name
>> - price
>> - category
>>> TABLE products ( id SERIAL PRIMARY KEY, name VARCHAR(200), price integer, category VARCHAR(200) )

>### Orders
>> - id
>> - user_id
>> - status 
>>> TABLE orders ( id SERIAL PRIMARY KEY, user_id integer foreign key to users table, status VARCHAR(10) )

>### product_order 
>> - id
>> - quantity
>> - order_id
>> - product_id
>>> TABLE product_order ( id SERIAL PRIMARY KEY, quantity integer NOT NULL, order_id integer foreign key to orders table, product_id integer foreign key to products table )