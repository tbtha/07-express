// DESAFIO REALIZADO POR TABATHA GAMBOA Y NICOLE GAMBOA 

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




