/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

/**
Измените функцию get Last Символ, чтобы она возвращала последний символ полученной строки */

function getLastCharacter(name) {
  return name.substring(name.length - 1); // viimeinen merkki
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function LastSymbol(name) {
  return name.substring(name.length - 1); // viimeinen merkki
}

// Kutsu tekemääsi funktiota
console.log(LastSymbol("HuhtikuU")); // "U"
console.log(LastSymbol("Aurinko€")); // "€"
