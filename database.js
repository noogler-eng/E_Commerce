const mysql = require("mysql2/promise")
const dotenv = require("dotenv");
dotenv.config();

async function connectMysql(){
    try{
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        return connection;
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}


async function getProducts(){
    const connection = connectMysql(); 
    try{
        const [rows] = await connection.execute("SELECT * FROM products")
        console.log(rows);
    }catch(error){
        console.log(error);
    }
}    


module.exports = { connectMysql, getProducts }