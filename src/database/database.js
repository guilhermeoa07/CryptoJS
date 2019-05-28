const sequelize = require('sequelize');
const conn = new sequelize('cryptojs', 'root', 'password', {
	host: 'localhost',
	dialect: 'mysql'
});

conn
	.authenticate()
	.then(() => {
		console.log('Conectado com sucesso');
	})
	.catch((err) => {
		console.log('Erro');
	});
