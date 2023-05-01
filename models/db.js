const Sequelize = require('sequelize');
const sequelize = new Sequelize('cadastro', 'root', '1981abcd.', {
    host :  'localhost',
    dialect :   'mysql'
});

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
};
