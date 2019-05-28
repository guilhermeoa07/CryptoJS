const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://criptoeconomia.com.br/cotacoes/';

let result = [];

module.exports = {
	async atualizar() {
		await request(url, (err, res, body) => {
			if (err) return console.log(err);
			var $ = cheerio.load(body);
			$('.coin-table tr').each(function() {
				var name = $(this).find('th a').text().trim();
				var valor = $(this).find('.text-right').text().split('R$');
				if (name) {
					result.unshift({ Nome: name, Valor: 'R$ ' + valor[1] });
				}
			});
			console.log(result);
			return result;
		});
	}
};
