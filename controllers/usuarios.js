const { response, request } = require("express");

const usuariosGet = (req, res = response) => {
  const { q, nombre, apikey } = req.query;
  res.json({
    msg: "get API - Controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API - Controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API - Controlador",
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
