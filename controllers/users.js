 const express = require('express');

//RESTFUL => GET, POST, PUT, PATCH y DELETE
//MODELO = (Una estructura de datos que representa una entidad del mundo real)
function list(req, res, next) {
    res.send('Lista de usuarios del sistema');
}

function index(req, res, next){
    res.send(`Usuario del sistema con un ID = ${req.params.id}`);
}

function create(req, res, next){
  const name = req.body.name;
  const lastName = req.body.lastName;
    res.send(`Crear un usuario nuevo con nombre ${name} y apellido ${lastName} `);
}

function replace(req, res, next){
    res.send(`reemplazo de un usuario con ID = ${req.params.id} por otro`);
}

function edit(req, res, next){
    res.send(`reemplazo las propiedades de un usuario con ID = ${req.params.id} por otras`);
}

function destroy(req, res, next){
    res.send(`elimino un usuario con ID = ${req.params.id}`);
}

module.exports = {
    list, index, create, replace, edit, destroy
}
