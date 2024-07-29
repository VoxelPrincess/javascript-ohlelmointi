// Kirjoita funktio sum1 siten, että se palauttaa a:n ja b:n summan. Käytä tavallista funktiota
// Kirjoita funktio sum2, joka on sama kuin yllä, mutta on nuolifunktio

// Напишите функцию sum1, чтобы она возвращала сумму a и b. Используйте обычную функцию
// Напишите функцию sum2, аналогичную приведенной выше, но являющуюся стрелочной функцией.

function sum1(x, y) {
  return x + y;
}

sum2 = (x, y) => {
  return x + y;
};

console.log(sum1(1, 3));
console.log(sum1(2, 5));
console.log(sum2(4, 3));
console.log(sum2(7, 5));
