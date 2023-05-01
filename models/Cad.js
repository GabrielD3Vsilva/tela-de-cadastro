const db = require('./db');

const Cad = db.sequelize.define('cads', {
    nome: db.Sequelize.STRING,
    email: db.Sequelize.STRING,
    senha: db.Sequelize.STRING,
});

//Cad.sync({force: true});


module.exports = Cad;