const express = require('express');
const router = expresse.Router();
const Auteur = require('../models/auteur');
const Livre = require('../models/livre');

// CRUD POUR LES AUTEURS
router.get('/auteurs', async (req, res) => {
    const auteurs = await Auteur.findAll();
    res.json(auteurs);
});

router.post('/auteurs', async (req, res) => {
    const auteur = await Auteur.create(req.body);
    res.json(auteur);
})