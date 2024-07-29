/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */

/**Создайте программу Magic 8-Ball, имитирующую классическую игрушку для гадания.
 * Пользователь вводит вопрос с ответом «да» или «нет», и программа дает случайный ответ от восьмерки.
 * Реализуйте программу, использующую условные операторы для выбора и отображения одного из нескольких предопределенных ответов. */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}

function magic8Ball() {
  let answer; // Объявляем переменную answer
  let number = getRandomInt(1, 8);
  switch (number) {
    case 1:
      answer = "It is certain"; // Yes
      break;
    case 2:
      answer = "Yes — definitely"; // Yes
      break;
    case 3:
      answer = "Most likely"; // Yes
      break;
    case 4:
      answer = "Yes"; // Yes
      break;
    case 5:
      answer = "Don’t count on it"; // No
      break;
    case 6:
      answer = "My reply is no"; // No
      break;
    case 7:
      answer = "My sources say no"; // No
      break;
    case 8:
      answer = "Very doubtful"; // No
      break;
  }
  return answer;
}

function askQuestion() {
  let question = document.getElementById("questionInput").value;
  if (question.trim() === "") {
    alert("Please enter a question.");
    return;
  }
  let answer = magic8Ball();
  document.getElementById("answer").innerText = answer;
}
