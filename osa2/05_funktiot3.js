/** Harjoitus: Neliön pinta-ala
 * Tee funktio nimeltä laskeNelionPintaala, joka ottaa yhden parametrin: sivunPituus.
 * Funktio laskee annetun neliön pinta-alan kaavalla sivunPituus * sivunPituus ja palauttaa sen.
 * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
 * Voit käyttää joko nuolifunktiota tai tavallista funktiota */

/** Упражнение: Площадь квадрата
 * Создайте функцию CalculateQuadArea, которая принимает один параметр: SideLength.
 * Функция вычисляет площадь заданного квадрата по формуле sideLength*sideLength и возвращает ее.
 * Протестируйте функцию, задав для нее страницы разной длины и выведя области на консоль.
 * Вы можете использовать либо функцию стрелки, либо обычную функцию */

function CalculateQuadArea(SideLength) {
  return SideLength * SideLength;
}

console.log("Quad Area =", CalculateQuadArea(5));
console.log("Quad Area =", CalculateQuadArea(7));
console.log("Quad Area =", CalculateQuadArea(9));
