const mongoose = require('mongoose')

//Define a schema
var Schema = mongoose.Schema;
//Creamos una instancia de la clase Schema
var EsquemaUsuario = new Schema({
  nombre: String,
  apellidos: String,
  email: String
});

//Creamos el modelo
var m_usuarios = mongoose.model('m_usuarios', EsquemaUsuario );

module.exports = m_usuarios