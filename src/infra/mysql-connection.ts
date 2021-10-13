import mysql = require("mysql");
import dotenv = require('dotenv');
dotenv.config();


export = class SqlPool {
    public static readonly pool = mysql.createPool({
        connectionLimit: 10,
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PWD,
        database: process.env.MYSQL_DB,
    });
}
