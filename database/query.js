const user_table = `CREATE TABLE user (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(20) UNIQUE,
    phoneNumber CHAR(10) UNIQUE,
    address VARCHAR(255),
    CHECK (LENGTH(PhoneNumber) = 10)
);`;

const product_table = `CREATE TABLE products (
    pId INT PRIMARY KEY AUTO_INCREMENT,
    pname varchar(40) NOT NULL,
    price int NOT NULL,
    qty int NOT NULL,
);`

const cart_table = `CREATE TABLE cart (
    cartId INT PRIMARY KEY,
    userId INT,
    Foreign Key (userId) references User(userId)
);`

const cartItems_table = `CREATE TABLE cartItem (
    cartItemId INT PRIMARY KEY AUTO_INCREMENT
    cartId INT,
    pId INT,
    Foreign Key (cartId) references cart(cartId),
    Foreign Key (pId) references products(pId)
);`  

const orders_table = `CREATE TABLE orders (
    orderId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    Foreign Key (userId) references user(userId),
    OrderDate varchar(20),
    TotalAmount INT
);`

const orderItems = `CREATE TABLE orderItem (
    orderItemId INT PRIMARY KEY AUTO_INCREMENT,
    orderId INT,
    pId INT,
    Foreign Key (orderId) references Orders(orderId),
    Foreign Key (pId) references Products(pId),
    quantity INT
);`

module.exports = { user_table, product_table, cart_table, cartItems_table, orders_table, orderItems };
