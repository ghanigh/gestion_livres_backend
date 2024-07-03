const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Auteur = sequelize.defini('Auteur', {
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
    datanaissance: {
        type: DataTypes.DATA,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = Auteur;
