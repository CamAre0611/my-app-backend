const Usuario = require("../models/Usuario");

// crear usuario
exports.crearUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
};

// obtener usuarios
exports.obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};