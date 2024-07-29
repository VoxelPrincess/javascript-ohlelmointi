/**
Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä

 */

/**
Измените функцию SkipFirstCharacter, чтобы она возвращала строку с полученной строкой без первого символа.

  */

function skipFirstCharacter(text) {
  return text.substring(1, text.lenth);
}

// Esimerkki - älä muokkaa
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function PartOfText(text) {
  return text.substring(1, text.lenth);
}

// Kutsu tekemääsi funktiota
console.log(PartOfText("JäätElÖ"));
console.log(PartOfText("HuhtikUu"));
