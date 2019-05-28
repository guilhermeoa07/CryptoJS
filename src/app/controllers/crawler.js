const router = require('express').Router();
const buscar = require('../busca');
router.get('/atualizar', async (req, res) => {
	console.log(await buscar.atualizar());

	res.status(200).send('ok');
});

module.exports = (app) => app.use('/', router);
