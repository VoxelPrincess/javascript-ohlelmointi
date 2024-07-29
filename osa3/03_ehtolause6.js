/**
Kehitä funktio nimeltä greaterNum, joka:

- Hyväksyy kaksi argumenttia, jotka molemmat ovat numeroita.
- Palauttaa näistä kahdesta suuremman numeron.
 */

/**
Разработайте функцию moreNum, которая:

- Принимает два аргумента, оба из которых являются числами.
- Возвращает большее из двух чисел.
  */

function greaterNum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log(greaterNum(5, 10)); // 10
console.log(greaterNum(2, 1)); // 2
console.log(greaterNum(4, 25)); // 25
