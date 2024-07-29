/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

/* Разработать программу, которая первоначально запрашивает у пользователя одно число. После этого программа спрашивает, хочет ли пользователь
продолжить ввод цифр, задав следующий вопрос: «Хотите продолжить ввод цифр?» (k/e)».
Если пользователь отвечает «k», программа запрашивает другой номер. Если ответ «е», программа завершается.
После завершения программа вычисляет и отображает среднее значение всех введенных чисел.*/

(function () {
  let num;
  let i = 0;
  let sum = 0;

  do {
    num = Number(prompt("Syötä numero:"));
    i++;
    sum += num;

    console.log("Haluatko jatkaa numeroiden antamista? (k/e)");
  } while (prompt("Kirjoita vastauksesi") !== "e");

  let averageAmount = sum / i;
  console.log("Numeroiden määrä on ", i - 1, ", lukujen summa on ", sum, ". Keskimääräinen summa on ", averageAmount);
})();
