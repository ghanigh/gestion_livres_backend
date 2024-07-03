const Auteur = require('../../models/auteur');

test('Créer un auteur', async () => {
    const auteur = await Auteur.create({ nom: 'Doe', prenom: 'John', datenaissance: '1990-01-01' });
    expect(auteur.nom).toBe('Doe');
});
