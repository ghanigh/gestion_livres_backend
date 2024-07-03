const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Auteur = require('./auteur');

const livre = require.define('Livre', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateparuption: {
        type: DataTypes.DATE,
        allowNull: false
    },
    auteurçid: {
        type: DataTypes.INTEGER,
        references: {
            model: Auteur,
            key: 'id'
        }
    }
}, {
    timestamps: false
});

module.exports = livre;
