import dotenv from 'dotenv'
import mysql from 'mysql2'

dotenv.config()

export const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

