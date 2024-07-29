/**
Muokkaa funktio getFullName function palauttamaan interpolation avulla so that it returns the person's full name by utilizing string interpolation.
 */
/**
Измените функцию getFullName, чтобы она возвращала интерполяцию, чтобы она возвращала полное имя человека, используя строковую интерполяцию.
  */

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Esimerkki - älä muokkaa
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function name(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Kutsu tekemääsi funktiota
console.log("Johan Ludvig", "Runeberg");
console.log("Matt", "Damon");
