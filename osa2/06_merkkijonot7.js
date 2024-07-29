/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 */

/**
Измените функцию concatInitials, чтобы она возвращала строку, объединяющую параметры firstNameInitial и LastNameInitial.
  */

function concatInitials(firstNameInitial, lastNameInitial) {
  return firstNameInitial + lastNameInitial;
}

// Esimerkki - älä muokkaa
console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function TwoWords(a, b) {
  return a + b;
}

// Kutsu tekemääsi funktiota
console.log(TwoWords("A", "urinko"));
console.log(TwoWords("ConcA", "TenaTion"));
