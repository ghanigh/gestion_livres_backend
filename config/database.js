const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_livres', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;