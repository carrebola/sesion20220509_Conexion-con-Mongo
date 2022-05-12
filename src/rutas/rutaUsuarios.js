
const express = require('express')
const rutaUsuarios = express.Router()
const {
    leerUsuarios,
    leerUsuarioId, 
    crearUsuario, 
    modificarUsuarioId, 
    borrarUsuarioId

} = require('../controladores/controladoresUsuarios')

//Leer todos los usuarios
rutaUsuarios.get('/', leerUsuarios)
//Leer un usuario con Id determinado
rutaUsuarios.get('/:id', leerUsuarioId)
//Crear un UNICO usuario
rutaUsuarios.post('/', crearUsuario)
//Modificar un usuario con ID
rutaUsuarios.put('/:id', modificarUsuarioId)
//Borrar un usuario con ID
rutaUsuarios.delete('/:id', borrarUsuarioId)


module.exports = rutaUsuarios