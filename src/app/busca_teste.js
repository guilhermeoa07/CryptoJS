const cheerio = require('cheerio');
const fs = require('fs');
const got = require('got');

const url = 'https://criptoeconomia.com.br/cotacoes/';

module.exports = {
	atualizar() {
		return new Promise((resolve, reject) => {
			(async () => {
				try {
					const response = await got(url);
					const result = [];
					const $ = cheerio.load(response.body);
					$('.coin-table tr').each(function() {
						const name = $(this).find('th a').text().trim();
						const valor = $(this).find('.text-right').text().split('R$');
						if (name) {
							result.unshift({ Nome: name, Valor: 'R$ ' + valor[1] });
						}
					});
					return result;
				} catch (error) {
					console.log(error.response.body);
					//=> 'Internal server error ...'
				}
			})();
		});
	}
};
