/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. 
Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/

/*
- Создайте переменные a и b и присвойте им целочисленные значения.
- Применяйте арифметические операторы сложения, вычитания, умножения и деления к переменным a и b. 
Сохраняйте каждый результат в отдельной переменной (сумма, разность, произведение, частное, остаток).

- Используйте метод console.log() для вывода результата каждой операции на консоль.

- Добавьте комментарии к коду, чтобы объяснить, что делает каждая операция.
*/

let a = 10;
let b = 3;

let sum = a + b; //summa
let difference = a - b; //erotus
let multiplication = a * b; //tulo
let roundedA = Math.round(a / b); //osamäärä
let remainder = a % b; //jakojäännös

console.log("a=", a);
console.log("b=", b);
console.log("a+b=", sum);
console.log("a-b=", difference);
console.log("a*b=", multiplication);
console.log("a/b=", roundedA);
console.log("remainder of a/b =", remainder);
