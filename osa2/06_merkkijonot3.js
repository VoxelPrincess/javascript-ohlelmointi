/**
Muokkaa funktiota lowerName, jotta se palauttaa saamansa name-parametrin kokonaan pienin kirjaimin

 */

/**
Измените функцию lowName так, чтобы она возвращала полученный параметр имени только строчными буквами.

  */

function lowerName(name) {
  return name.toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(lowerName("Sam")); // "sam"
console.log(lowerName("ALEX")); // "alex"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function alempiNimi(name) {
  return name.toLowerCase();
}

// Kutsu tekemääsi funktiota
console.log(alempiNimi("Summer Is ComING soon")); //summer is coming soon
