module.exports = (sequelize, Sequelize) => {
    const Funcionario = sequelize.define("funcionario", {
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      }
    });
  
    return Funcionario;
  };
  