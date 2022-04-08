function calculaIdade(anoNascimento){
	return 2022 - anoNascimento
}		
function calculaImc(peso, altura){
	return peso/(altura * altura)
}

module.exports.calculaIdade = calculaIdade;
module.exports.calculaImc = calculaImc;

