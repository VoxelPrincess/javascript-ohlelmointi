//Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä
//tulostaa pienimmän ja suurimman numeron.

//Создать программу, которая запрашивает десять чисел. Программа рассчитывает и печатает сумму и среднее значение.
//выводим наименьшее и наибольшее число.

let summa = 0;
let lukujenMaara = 0;
let maxLuku = -Infinity;
let minLuku = Infinity;
let numerot = [];

for (let i = 0; i < 10; i++) {
  let syote = Number(prompt("Anna luku"));

  // если введено не число, пропускаем
  if (!isNaN(syote)) {
    summa += syote;
    lukujenMaara++;
    numerot.push(syote);

    // обновляем максимальное число
    if (syote > maxLuku) {
      maxLuku = syote;
    }

    // обновляем минимальное число
    if (syote < minLuku) {
      minLuku = syote;
    }
  }
}

let keskiarvo = summa / lukujenMaara;
console.log("Lopussa lukujen summa on:", summa);
console.log("Lopussa lukujen keskiarvo on:", keskiarvo);
console.log("Isoin annettu luku on:", maxLuku);
console.log("Pienin annettu luku on:", minLuku);
