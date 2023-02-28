
const bcrypt = require('bcrypt');
const e = require("express");
const db = require("../models");
const Funcionario = db.funcionarios;
const Op = db.Sequelize.Op;
const salt = 10;

// Create and Save a new Funcionario
exports.create = (req, res) => {
  console.log(req);
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  bcrypt.hash(req.body.senha, salt, function(err, hash){
    if (err) {
      res.status(500).send({
        message: err.message || "Error hashing password"
      });
      return;
    }
    const funcionario = {
      nome: req.body.nome,
      email: req.body.email,
      senha: hash
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
  });

  }
exports.login = (req, res) => {
  console.log("\nE-mail:" + req.body.email);
  console.log("Senha:" + req.body.senha+"\n");

  Funcionario.findOne({ where: { email: req.body.email } })
  .then(data => {
    if (data) {
          bcrypt.compare(req.body.senha, data.senha, function(err, result){
            if(result){
              console.log("LOGIN REALIZADO COM SUCESSO!!!!");
              res.send(data);
            }else { 
              res.status(404).send({
                message: `Cannot find Funcionario with senha=${req.body.senha}.`
              });
            }
          })
    } else {
      res.status(404).send({
        message: `Cannot find Funcionario with email=${req.body.email}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Funcionario with id=" + email
    });
  });
}
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



