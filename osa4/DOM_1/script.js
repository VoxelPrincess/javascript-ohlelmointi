/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/

/*
Напишите код JavaScript, который выбирает идентификатор содержимого с помощью метода getElementById.
Напишите функцию, которая обновляет текстовое содержимое выбранного элемента при нажатии кнопки на текст «Привет, мир!».
*/

// Method 1
document.getElementById("button").addEventListener("click", function () {
  document.getElementById("content").textContent = "Hei maailma!";
});

// Method 2 - Laura metodi
const changeText = () => {
  const textPlacement = document.getElementById("content");
  textPlacement.innerHTML = "HEI MAAILMA!";
};

// Method 2:
//document.getElementById("button").addEventListener("click", changeText);
