require('dotenv').config()
const fs = require('fs')

const { Client } = require('pg')

const config = {
    user: process.env.USER ,
    password:process.env.PASSWORD ,
    host:process.env.HOST ,
    port:process.env.PORTDB ,
    database:process.env.DBNAME,
}

const client = new Client(config);


const migrate = async () => {
    await client.connect()

    const sql = fs.readFileSync('data.sql').toString();

    const res = await client.query(sql)
    await client.end()
    return res.rows
}

migrate().then(console.log)