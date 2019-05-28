const router = require('express').Router();
const buscar = require('../busca');
router.get('/atualizar', async (req, res) => {
	let a = await buscar.atualizar().then(() => console.log('ok')).catch((err) => console.log('deu merda' + err));
	console.log(a);
	res.status(200).send('ok');
});

module.exports = (app) => app.use('/', router);
