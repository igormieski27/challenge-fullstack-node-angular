module.exports = app => {
    const funcionarios = require("../controllers/funcionario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Funcionario
    router.post("/", funcionarios.create);
  
    // Retrieve a single Funcionario with id
    router.get("/:id", funcionarios.findOne);

    // Retrieve a single Funcionario with email
    router.get("/:email", funcionarios.findOneEmail);
  
    app.use("/api/funcionarios", router);
  };
  