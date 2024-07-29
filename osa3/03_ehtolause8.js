/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

 */

/**
Напишите функцию под названием «множественное число», которая:

Принимает два аргумента: существительное и число.
Возвращает строку, объединяющую число и соответствующую измененную форму существительного, например «5 кошек» или «1 собака».

  */

function pluralize(substantiivi, määrä) {
  if (määrä <= 1) {
    return määrä + " " + substantiivi;
  } else {
    return määrä + " " + substantiivi + "a";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Minulla on " + pluralize("kala", 0));
console.log("Minulla on " + pluralize("koira", 1));
console.log("Minulla on " + pluralize("papukaija", 7));
console.log("-----------------------");

// Treenaa: Keksi itse samanlainen funktio eri nimellä.
function abc(substantiivi, määrä) {
  if (määrä <= 1) {
    return määrä + " " + substantiivi;
  } else {
    return määrä + " " + substantiivi + "a";
  }
}

// Kutsu tekemääsi funktiota
console.log("Minulla on " + abc("kala", 3));
console.log("Minulla on " + abc("koira", 2));
console.log("Minulla on " + abc("papukaija", 1));
