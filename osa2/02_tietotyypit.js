/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/

/*
- Создайте переменную age и присвойте ей целочисленное значение.
- Создайте переменную с именем name и присвойте ей строковое значение.
- Создайте переменную с именем isStudent и присвойте ей значение истинности (логическое значение).
— Создайте переменную с именем Hobbies и передайте ей массив, содержащий некоторые строковые значения (например, хобби).
- Создайте информационный объект, то есть объект с двумя свойствами: schoolName (строка) и оценка (целое число).

- Используйте метод console.log() для вывода каждой переменной на консоль.

- Используйте оператор typeof, чтобы проверить тип данных каждой переменной и распечатать результат с помощью метода console.log().
*/

let isStudent = false;

let hobbies = ["sähly", "pesäpallo","koris","jumppa"];
let info= {schoolName: "BC", grade:15}

console.log("hobbies:", hobbies);
console.log("info:", info);

console.log("hobbies tyyppi:", typeof hobbies);
console.log("info tyyppi:", typeof info);



