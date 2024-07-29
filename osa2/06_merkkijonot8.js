/**
Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 
 */

/**
Измените функциюsayHello, чтобы включить полученное имя в качестве параметра в приветствие.
  */

function sayHello(name) {
  return "Hello " + name;
}

// Esimerkki - älä muokkaa
console.log(sayHello("Alex")); // "Hello Alex"
console.log(sayHello("Sam")); // "Hello Sam"

// Treenaa: Keksi itse samanlainen funktio eri nimellä ja tervehdyksellä
function Hi(name) {
  return "Hello " + name;
}

// Kutsu tekemääsi funktiota
console.log(Hi("New Day")); // "New Day"
console.log(Hi("World!")); // "Hello World!"
