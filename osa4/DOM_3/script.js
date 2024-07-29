/* Luo toiminnallisuus, jossa syötekentän arvo näytetään jatkuvasti ja päivitetään omalla alueellaan sivulla käyttäjän kirjoittaessa, käyttäen onchange-tapahtumaa. */

/* Ohjeet:

HTML:
- Luo perus-HTML
- Sisällytä <input type="text"> -elementti, johon käyttäjä voi kirjoittaa tekstiä.
- Lisää <div> -elementti, jolla on tunniste (esim. id="displayText"), joka näyttää syötekentän arvon.
- Muista yhdistää HTML- ja JS-tiedostot

JavaScript:

Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän syötekentälle, erityisesti kuuntelemalla muutos-tapahtumaa.

Tapahtumankäsittelijän funktion tulisi:
- Hakea nykyinen arvo syötekentästä.
- Päivitä displayText <div>:n textContent vastaamaan syötekentän arvoa.
- Saadaksesi näytön päivittymään dynaamisemmin (käyttäjän kirjoittaessa), harkitse input-tapahtuman käyttämistä change-tapahtuman sijasta tai sen lisäksi. */

/* Создать функциональность, при которой значение поля ввода постоянно отображается и обновляется в отдельной области на странице, когда пользователь вводит его, используя событие onchange. */

/* Инструкции:

HTML:
- Генерация базового HTML
– Включите элемент <input type="text">, в который пользователь может вводить текст.
- Добавьте элемент <div> с идентификатором (например, id="displayText"), который отображает значение поля ввода.
– Не забудьте объединить файлы HTML и JS.

JavaScript:

Напишите код JavaScript, который добавляет обработчик событий в поле ввода, специально прослушивая событие изменения.

Функция обработчика событий должна:
- Получить текущее значение из поля ввода.
— Обновите textContent displayText <div>, чтобы он соответствовал значению поля ввода.
- Чтобы сделать обновление экрана более динамичным (по мере ввода пользователем), рассмотрите возможность использования события ввода вместо или в дополнение к событию изменения. */

/* Etsi syötekenttä DOM:sta
const inputField = document.getElementById("merkkiInput");

// Etsi displayText <div> DOM:sta
const displayText = document.getElementById("displayText");

// Lisää tapahtumankäsittelijä syötekentälle
inputField.addEventListener("input", function (event) {
  // Hae nykyinen arvo syötekentästä
  const value = event.target.value;

  // Päivitä displayText <div>:n textContent vastaamaan syötekentän arvoa
  displayText.textContent = value;
});
*/

/* 
method 2

const input = document.querySelector("input");

const liveTyping = () => {
  const textArea = document.querySelector("#displayText");
  textArea.textContent = input.value;
};

input.addEventListener("input", liveTyping); 
*/

document.addEventListener("DOMContentLoaded", (event) => {
  // Saadaan elementit niiden tunnisteiden perusteella
  const inputField = document.getElementById("inputField");
  const displayText = document.getElementById("displayText");

  // Funktio päivittää displayTextin sisältöä
  function updateDisplayText() {
    displayText.textContent = inputField.value;
  }

  // Lisätään 'input' tapahtumakäsittelijä syöttökenttään
  inputField.addEventListener("input", updateDisplayText);
});
