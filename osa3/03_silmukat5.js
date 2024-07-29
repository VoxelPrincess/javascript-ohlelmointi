// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.

// Разработать программу, которая просит пользователя вводить числа до тех пор, пока пользователь не введет 0.
// На этом этапе программа перестает работать.
// После завершения программа должна вычислить и отобразить среднее значение всех введенных чисел.

(function () {
  let num;
  let i = 0;
  let sum = 0;
  while (true) {
    num = Number(prompt("Enter the numbers (enter 0 to stop):"));
    if (num === 0) {
      console.log("Stop");
      break;
    }
    i++;
    sum = sum + num;
  }
  let averageAmount = sum / i;
  console.log(
    "The amount of numbers is ",
    i,
    ", the sum of numbers is ",
    sum,
    ". The average of amount is ",
    averageAmount
  );
})();
