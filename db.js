require('dotenv').config()

const { Client } = require('pg')

const getTodos = async () => {
    const client = new Client()
    await client.connect()
    try{
        const res = await client.query('SELECT * from tablass')
        return res.rows
    }catch(error){
        console.log("error en DB :" + error)
        return {data:"error"}
    }finally{
        
    await client.end()
    }
}


const createTodos = async (name,description) => {
    const client = new Client()
    await client.connect()
    const query = { 
        text: "INSERT INTO tablass (nombre, descripcion, fechacreacion) VALUES($1,$2,now()) RETURNING*;",
        values:[name,description]
    }
    try{
        const res = await client.query(query)
        return res.rows
    }catch(error){
        console.log("error en DB :" + error)
        return {data:"error"}
    }finally{
        
    await client.end()
    }
}

const deleteTodos = async (id) => {
    const client = new Client()
    await client.connect()
    const query = { 
        text: "DELETE from tablass WHERE id = $1 RETURNING*;",
        values:[id]
    }
    try{
        const res = await client.query(query)
        return res.rows
    }catch(error){
        console.log("error en DB :" + error)
        return {data:"error"}
    }finally{
        
    await client.end()
    }
}



module.exports = {getTodos , createTodos, deleteTodos}




// require('dotenv').config()
// const { Pool } = require('pg');

// // const config = {
// //     user: process.env.USER ,
// //     password:process.env.PASSWORD ,
// //     host:process.env.HOST ,
// //     port:process.env.PORTDB ,
// //     database:process.env.DBNAME,
// // }

// // const pool = new Pool(config);
// const pool = new Pool();


// const getTodos = async () => {
//     const client = await pool.connect()
//     try{
//         const res = await client.query('SELECT * from todos')
//         return res.rows
//     }catch(error){
//         console.log("error en DB :" + error)
//         return {data:"error"}
//     }finally{
//     await client.release()
//     }
// }



// const createTodos = async (name,description) => {
//     const query = { 
//         text: "INSERT INTO todos (nombre, descripcion, fechacreacion) VALUES($1,$2,now()) RETURNING*;",
//         values:[name,description]
//     }
//     const client = await pool.connect()
//     try{
//         const res = await client.query(query)
//         return res.rows
//     }catch(error){
//         console.log("error en DB :" + error)
//         return {data:"error"}
//     }finally{
        
//     await client.release()
//     }
// }

// const deleteTodos = async (id) => {
    
//     const query = { 
//         text: "DELETE from todos WHERE id = $1 RETURNING*;",
//         values:[id]
//     }
//     const client = await pool.connect()
//     try{
//         const res = await client.query(query)
//         return res.rows
//     }catch(error){
//         console.log("error en DB :" + error)
//         return {data:"error"}
//     }finally{
        
//     await client.release()
//     }
// }



// module.exports = {getTodos , createTodos, deleteTodos}



