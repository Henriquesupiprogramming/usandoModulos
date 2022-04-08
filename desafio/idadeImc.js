const {calculaIdade, calculaImc} = require("./funcoes.js");


const anoNascimento = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

const idade = calculaIdade(anoNascimento);
const imc = calculaImc(peso, altura);


console.log (`idade = ${idade} imc ${imc} `);