const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

const url = 'https://criptoeconomia.com.br/cotacoes/';

module.exports = {
	atualizar() {
		return new Promise((resolve, reject) => {
			request(url, (err, res, body) => {
				if (err) {
					reject(err);
				}
				const result = [];
				const $ = cheerio.load(body);
				$('.coin-table tr').each(function() {
					const name = $(this).find('th a').text().trim();
					const valor = $(this).find('.text-right').text().split('R$');
					if (name) {
						result.unshift({ Nome: name, Valor: 'R$ ' + valor[1] });
					}
				});
				resolve(result);
			});
		});
	}
};
