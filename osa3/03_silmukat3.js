// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden.
//Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.
// Tehdään tämä opettajan esimerkkinä

// Создать программу, которая постоянно запрашивает у пользователя расстояние (в километрах)
// и время (в часах), а затем рассчитывает среднюю скорость.
// Программа должна остановиться, когда пользователь вводит 0 в качестве расстояния.
// Получив расстояние 0, программа не должна запрашивать дальнейший ввод.
// Давайте сделаем это на примере учителя

// IIFE Immediately Invoked Function Expression самозапускающаяся функция, начало Переменные, внутри этой функции, не видны снаружи, что позволяет использовать
// (function(a, b, c){...code...})(a, b, c)
// одинаковые переменные везде
(function () {
  let etaisyys, aika;

  while (true) {
    etaisyys = Number(prompt("Syötä etäisyys kilometreinä (0 lopettaa ohjelman)"));

    if (isNaN(etaisyys) || etaisyys < 0) {
      console.log("Syötä kelvollinen etäisyys.");
      continue;
    }

    if (etaisyys === 0) {
      console.log("Ei enempää keskinopeuksia.");
      break;
    }

    aika = Number(prompt("Anna aika tunteina"));

    if (isNaN(aika) || aika <= 0) {
      console.log("Syötä kelvollinen aika.");
      continue;
    }

    let keskinopeus = etaisyys / aika;
    let pyoristetty = keskinopeus.toFixed(1);
    console.log(`Kun ajetaan ${etaisyys} kilometriä ${aika} tunnin aikana, keskinopeus on ${pyoristetty} km/h`);
  }
})();
