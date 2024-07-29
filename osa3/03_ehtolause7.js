/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/
/**
Разработайте функцию AssignGrade, которая:

Принимает один аргумент — числовое значение.
Возвращает буквенную оценку на основе оценки следующим образом:
- «А» для баллов 90 и более.
- «В» для баллов 80-89.
- «С» для баллов 70–79.
- «D» для баллов 60–69.
- «F» для баллов ниже 60.

*/

function assignGrade(age) {
  if (age >= 90) {
    return "A";
  } else if (80 <= age && age <= 89) {
    return "B";
  } else if (70 <= age && age <= 79) {
    return "C";
  } else if (60 <= age && age <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Sinä sait " + assignGrade(95)); // Sinä sait A
console.log("Sinä sait " + assignGrade(81)); // Sinä sait B
console.log("Sinä sait " + assignGrade(72)); // Sinä sait C
console.log("Sinä sait " + assignGrade(64)); // Sinä sait D
console.log("Sinä sait " + assignGrade(42)); // Sinä sait F
console.log("----------------------s");

// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.
function ageType(age) {
  if (age >= 90) {
    return "A";
  } else if (80 <= age && age <= 89) {
    return "B";
  } else if (70 <= age && age <= 79) {
    return "C";
  } else if (60 <= age && age <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// Kutsu tekemääsi funktiota
console.log("Sinä sait " + ageType(90)); // Sinä sait A
console.log("Sinä sait " + ageType(80)); // Sinä sait B
console.log("Sinä sait " + ageType(79)); // Sinä sait C
console.log("Sinä sait " + ageType(60)); // Sinä sait D
console.log("Sinä sait " + ageType(30)); // Sinä sait F
