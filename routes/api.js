//Generemos un Router para express
const express = require("express");
const controller = require("../controllers/welcome");
const api = express.Router();

//Importamos controlador
const Controller = require("../controllers/welcome")

//Generamos rutas
api.get("/alumno", Controller.welcome)
api.post("/alumno", controller.post)
api.put("/alumno", Controller.put)
api.delete("/alumno", Controller.delete)
api.get("/alumno/score", Controller.score)

module.exports = api;