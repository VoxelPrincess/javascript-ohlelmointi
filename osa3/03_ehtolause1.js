/**
Toteuta funktio canVote siten, että se palauttaa arvon true aina kun ikä on 18 tai enemmän ja false muissa tapauksissa.
*/
/**
Реализуйте функцию canVote так, чтобы она возвращала true, когда возраст 18 лет или старше, и false в противном случае.
*/

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Esimerkkikäyttö - älä muuta
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

// Treenaa: Keksi itse samanlainen funktio eri nimellä
function checkIt(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Kutsu tekemääsi funktiota
console.log(checkIt(-18)); // false
console.log(checkIt(118)); // false
console.log(checkIt(38)); // true
