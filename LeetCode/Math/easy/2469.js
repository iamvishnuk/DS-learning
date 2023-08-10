// 2469. Convert the Temperature

var convertTemperature = function (celsius) {
    // converting in to kelvin
    const kelvin = celsius + 273.15;
    // converting to fahrenheit => °F = (°C × 9/5) + 32
    const fahrenheit = (celsius * 9) / 5 + 32;
    return [kelvin, fahrenheit];
};

const celsius = 36.5;

console.log(convertTemperature(celsius));
