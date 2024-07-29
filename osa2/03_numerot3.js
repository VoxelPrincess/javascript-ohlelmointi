/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/

/*
- Создайте переменную с именем «num1» и присвойте ей значение с плавающей запятой.
- Создайте переменную с именем «num2» и присвойте ей другое значение с плавающей запятой.

- Округлите числа «num1» и «num2» до ближайшего целого числа и сохраните результаты в переменных «roundedNum1» и «roundedNum2».
- Вычислите квадратный корень из roundedNum1 и сохраните его в переменной с именем sqrtNum1.
– Найдите большее число между «roundedNum1» и «roundedNum2» и сохраните его в переменной с именем «maxNum».

- Используйте console.log() для вывода на консоль «roundedNum1», «roundedNum2», «sqrtNum1» и «maxNum».
- Используйте оператор typeof, чтобы проверить тип данных каждой новой переменной и распечатать результат с помощью console.log().
*/

let num1 = 15.6;
let num2 = 20.3;

let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

let sqrtNum1 = Math.sqrt(roundedNum1);

let maxNum = Math.max(roundedNum1, roundedNum2);

console.log("roundedNum1:", roundedNum1);
console.log("roundedNum2:", roundedNum2);
console.log("sqrtNum1:", sqrtNum1);
console.log("maxNum:", maxNum);

console.log("Type of roundedNum1:", typeof roundedNum1);
console.log("Type of roundedNum2:", typeof roundedNum2);
console.log("Type of sqrtNum1:", typeof sqrtNum1);
console.log("Type of maxNum:", typeof maxNum);
