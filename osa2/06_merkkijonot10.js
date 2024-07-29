/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

/**
Измените функцию Capitalize, чтобы она возвращала полученное слово, написанное только заглавной буквой.
  */

function capitalize(word) {
  let firstPart = word.substring(0, 1);
  let secondPart = word.substring(1, word.lenght);
  return firstPart.toUpperCase() + secondPart.toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function oneMore(word) {
  let firstPart = word.substring(0, 1);
  let secondPart = word.substring(1, word.lenght);
  return firstPart.toUpperCase() + secondPart.toLowerCase();
}
// Kutsu tekemääsi funktiota
console.log(oneMore("AuRiNKo"));
console.log(oneMore("jAVaScRIPT"));
console.log(oneMore("nImI & SukuNIMI"));
