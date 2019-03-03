'use strict'

var express = require('express');
var UserController = require('../controllers/userController');
var md_auth = require('../middlewares/authenticated');
var administrador = require('../middlewares/esAdmin'); 

var api = express.Router();
//Usuarios

api.post('/agregar-administrador', UserController.registrar);
api.post('/registrar', [md_auth.ensureAuth, administrador.esAdmin] ,UserController.registrar);
api.post('/login', UserController.login);

api.put('/editar-usuario/:id', md_auth.ensureAuth, UserController.editarUsuario);

api.delete('/borrar-usuario/:id', md_auth.ensureAuth, UserController.borrarUsuario);

module.exports = api;