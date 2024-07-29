// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.

// Определим функцию, которая преобразует температуру из Фаренгейта в Цельсий.
// Эта функция использует формулу (по Фаренгейту - 32) * 5/9
// Полученная температура для точности округляется до одного десятичного знака.

function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  let roundedCelsius = celsius.toFixed(1);
  return roundedCelsius;
}

// Esimerkki - älä muokkaa
console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"
