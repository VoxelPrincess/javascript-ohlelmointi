/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

/**
Измените функцию get First Character, чтобы она возвращала первый символ полученной строки */

function getFirstCharacter(name) {
  return name.substring(0, 1); //
}

// Esimerkki - älä muokkaa
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function FirstOne(name) {
  return name.substring(0, 1); //
}

// Kutsu tekemääsi funktiota

console.log(FirstOne("Laura")); // "L"
console.log(FirstOne("JavaScript")); // "J"
