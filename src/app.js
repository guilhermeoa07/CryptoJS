const express = require('express');

const normalizePort = require('normalize-port');
const port = normalizePort(process.env.PORT || '3000');

const app = express();

require('./app/controllers/crawler')(app);

app.get('/', (req, res) => {
	res.status(200).sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
	console.log('API rodando na porta: ' + port);
});

module.exports = app;
