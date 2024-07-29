// Täydennä funktio convertNumberToString niin, että se muuntaa saamansa numeron merkkijonoksi.
// Täydennä funktio convertStringToNumber niin, että se muuntaa saamansa merkkijonon numeroksi.

// Завершаем функцию ConvertNumberToString, чтобы она преобразовывала полученное число в строку.
// Дополняем функцию ConvertStringToNumber, чтобы она преобразовывала полученную строку в число.

function convertNumberToString(number) {
  let numberAsString = number.toString();
  return numberAsString;
}

function convertStringToNumber(string) {
  let number = Number.parseInt(string, 10);
  return number;
}

let number = 123;
let string = "456";

console.log(convertNumberToString(number)); // haluttu vastaus: "123"
console.log(convertStringToNumber(string)); // haluttu vastaus: 456

// Esimerkki - älä muokkaa
console.log(convertNumberToString(42)); // haluttu vastaus: "42"
console.log(convertNumberToString(97)); // haluttu vastaus: "97"
console.log(convertNumberToString(11)); // haluttu vastaus: "11"

console.log(convertStringToNumber("42")); // haluttu vastaus: 42
console.log(convertStringToNumber("97")); // haluttu vastaus: 97
console.log(convertStringToNumber("11")); // haluttu vastaus: 11
