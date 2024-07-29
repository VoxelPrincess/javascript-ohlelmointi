/** Harjoitus: Kolmion pinta-ala
 * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
 * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

/** Упражнение: Площадь треугольника
 * Создайте функцию CalculTriangleArea, которая принимает два параметра: baseLength и высоту.
 * Функция вычисляет площадь заданного треугольника по формуле baseLength * height/2 и возвращает ее.
 * Протестируйте функцию, задав для нее страницы разной длины и выведя области на консоль.
 * Вы можете использовать либо функцию стрелки, либо обычную функцию*/

function CalculTriangleArea(baseLength, height) {
  return (baseLength * height) / 2;
}

console.log("Triang Area=", CalculTriangleArea(5, 6));
console.log("Triang Area=", CalculTriangleArea(2, 5));
