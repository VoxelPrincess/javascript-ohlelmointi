// Kirjoita funktio multiply1 siten, että se palauttaa a:n ja b:n tulon (kertolaskun tulos). Käytä tavallista funktiota
// Kirjoita funktio multiply2, joka on nuolifunktio

// Esimerkkikäyttö - älä muokkaa

// Напишите функцию Multi1 так, чтобы она возвращала произведение a и b (результат умножения). Используйте обычную функцию
// Напишите функцию Multiple2, которая является стрелочной функцией

function multiply1(x, y) {
  return x * y;
}

//Nuolifunktio
multiply2 = (a, b) => {
  return a * b;
};

console.log(multiply1(2, 4));
console.log(multiply2(3, 2));
