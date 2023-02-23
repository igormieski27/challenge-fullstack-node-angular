
module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define("cliente", {
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    telefone: {
      type: Sequelize.STRING
    },
    cidade: {
      type: Sequelize.STRING
    },
    empresa: {
      type: Sequelize.STRING
    },
    visivel: {
      type: Sequelize.BOOLEAN
    },
    idFuncionario:  {
      type:Sequelize.INTEGER,
      references: {model: 'funcionarios', key: 'id'}
    }
  });

  return Cliente;
};
