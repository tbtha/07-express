//DESAFIO REALIZADO POR TABATHA GAMBOA Y NICOLE GAMBOA 
const express = require("express");
require('dotenv').config()
const {engine} = require("express-handlebars");
const {getTodos, createTodos, deleteTodos} = require("./db")

const app = express();
const port = 3000
// configuracion handlebars
app.engine("hbs", engine({extname : ".hbs"}));
app.set("view engine", ".hbs");
app.set("views", "./views");

// midleware
app.use(express.urlencoded({extended : true}))
app.use(
    "/css/bootstrap.min.css1",
    express.static(
        __dirname + "/public/css/bootstrap.min.css"
    )
);

// PAGINA PRINCIPAR LISTADO DE TAREAS
app.get("/", async(req,res) => {
    const todos = await getTodos()
    res.render('getTodo', {todos});
})
// FORMULARIO PARA CREAR TAREA
app.get("/todo-create", async(req,res) => {
    res.render("createTodo");
})

// 'FORMULARIO' PARA ELIMINAR TAREA
app.get("/todo-delete/:id", async(req,res) => {
    const {id} = req.params
    res.render("deleteTodo", {id});
})


// JSON CON DATOS
app.get("/todos", async (req,res) => {
    const todos = await getTodos()
    res.json(todos)
})
// CREATE
app.post("/todos", async(req,res) => {
    const {name,description} = req.body
    const crear = await createTodos(name,description)
    res.render("creado", {name, description})
})
// DELETE
app.get("/todos/:id", async (req,res) => {
    const {id} = req.params
    const eliminar = await deleteTodos(id)
    res.render("eliminado" , {id})
})


app.listen(port,() => console.log("servidor andando 3000"))