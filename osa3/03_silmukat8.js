// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää.
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista.
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

// Создать программу, которая сначала спрашивает пользователя, сколько чисел он хочет ввести.
//После получения этой информации программа должна предложить пользователю ввести каждое из этих чисел.
//Когда все числа введены, программа должна найти и отобразить наименьшее и наибольшее из введенных пользователем чисел.

(function () {
  let count = Number(prompt("Kuinka monta numeroa haluat syöttää?"));

  if (isNaN(count) || count <= 0) {
    console.log("Anna kelvollinen lukumäärä.");
    return;
  }

  let numerot = [];

  for (let i = 0; i < count; i++) {
    let numero = Number(prompt(`Syötä numero #${i + 1}:`));
    if (!isNaN(numero)) {
      numerot.push(numero);
    } else {
      console.log("Anna kelvollinen numero.");
      i--; // повторяем текущую итерацию для корректного ввода
    }
  }

  let pieninNumero = Math.min(...numerot);
  let suurinNumero = Math.max(...numerot);

  console.log("Pienin syötetty numero:", pieninNumero);
  console.log("Suurin syötetty numero:", suurinNumero);
})();
