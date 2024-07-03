const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Auteur = sequelize.define('Auteur', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datenaissance: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Auteur;
