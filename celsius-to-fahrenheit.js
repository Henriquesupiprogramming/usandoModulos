// celsius-to-fahrenheit.js 
function celsiusToFahrenheit(celsius) {
return celsius * (9/5) + 32;
}
// Pega a 3ª entrada de uma lista de argumentos const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);