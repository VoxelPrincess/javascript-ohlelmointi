// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty,
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

// Разработать программу, которая просит пользователя ввести 20 цифр. После того, как все числа введены,
//программа должна показать, сколько из этих чисел четные.
// Поскольку используется приглашение, это работает в браузере через html-страницу.

/** let laskuri = 0;
let parillisetLuvut = 0;

do {
  let input = Number(prompt("Anna lisää lukuja #" + (laskuri + 1) + ":"));
  if (!isNaN(input) && input % 2 === 0) {
    parillisetLuvut++;
  }
  laskuri++;
} while (laskuri < 20);

console.log("Parillisia lukuja oli " + parillisetLuvut); */

let parilliset = 0;

for (let laskuri = 0; laskuri < 20; laskuri++) {
  let syote = Number(prompt("Syötä numero #" + (laskuri + 1) + ":"));
  console.log("Syöte on:", syote);

  if (!isNaN(syote) && syote % 2 === 0) {
    parilliset++;
  }
}
console.log("Parillisten määrä:", parilliset);
