/**
Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
 */

/**
Если выбрана функция EvenOrOdd, это означает "четный", если в параметрах выбрано другое значение, а также "нечетное".
  */

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function numerType(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Kutsu tekemääsi funktiota

console.log(evenOrOdd(2)); // "even"
console.log(evenOrOdd(1)); // "odd"
console.log(evenOrOdd(200)); // "even"
