/**
Muokkaa funktio shoutMyName palauttamaan saamansa name-parametri isolla kirjaimilla.
 */

/**
Измените функцию ShotMyName, чтобы она возвращала полученный параметр имени в верхнем регистре.
  */

function shoutMyName(name) {
  return name.toUpperCase();
}

// Esimerkki - älä muokkaa
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function BigLetters(name) {
  return name.toUpperCase();
}

// Kutsu tekemääsi funktiota
console.log(BigLetters("SuMmeR")); // "SUMMER"
console.log(BigLetters("AuRiNko")); // "AURINKO"
