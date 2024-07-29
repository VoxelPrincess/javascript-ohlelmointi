/**
Täydennä funktio getCharCount niin, että se palauttaa argumenttina str saamiensa merkkien lukumäärän.
*/

/**
Завершите функцию getCharCount, чтобы она возвращала количество символов, полученных в качестве аргумента str.
*/

function getCharCount(str) {
  return str.length;
}

// Esimerkkikäyttö - älä muokkaa
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Jimi was here")); // 13

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function CharCounter(str) {
  return str.length;
}

// Kutsu tekemääsi funktiota

console.log(CharCounter("Summer is coming soon")); // 21
