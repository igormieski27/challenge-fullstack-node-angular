module.exports = app => {
  const clientes = require("../controllers/cliente.controller.js");

  var router = require("express").Router();

  // Create a new Cliente
  router.post("/", clientes.create);

  // Retrieve all Clientes
  router.get("/", clientes.findAll);

  // Retrieve all published Clientes
  router.get("/visivel", clientes.findAllPublished);

  // Retrieve a single Cliente with id
  router.get("/:id", clientes.findOne);

  // Update a Cliente with id
  router.put("/:id", clientes.update);

  // Delete a Cliente with id
  router.delete("/:id", clientes.delete);

  // Delete all Clientes
  router.delete("/", clientes.deleteAll);

  app.use("/api/clientes", router);
};
