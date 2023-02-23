const e = require("express");
const db = require("../models");
const Funcionario = db.funcionarios;
const Op = db.Sequelize.Op;

// Create and Save a new Funcionario
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Funcionario
  const funcionario = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha
  };

  // Save Funcionario in the database
  Funcionario.create(funcionario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Funcionario."
      });
    });
};

// Find a single Funcionario with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Funcionario.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Funcionario with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Funcionario with id=" + id
      });
    });
};

// Find a single Funcionario with an id
exports.findOneEmail = (req, res) => {
  const email = req.params.email;

  Funcionario.findOne(email)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Funcionario with id=${email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Funcionario with id=" + email
      });
    });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;

  Funcionario.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving funcionarios."
      });
    });
};



