
/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/
// Sinun koodisi tähän
const library = [
    {
        title: "Kuin surmaisi satakielen",
        author: "Harper Lee",
        publicationYear: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949
    }
];

console.log(library);

/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
// Sinun koodisi tähän
console.log(library[0].title);
library[1].publicationYear = 2023;
console.log(library[1]);

/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
// Sinun koodisi tähän
library[0].genreTypes = ["Fiction", "Drama"];

library[0].onAvailable = true;

console.log(library[0]);

/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
// Sinun koodisi tähän
function Book(title, author, publicationYear, genreTypes) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genreTypes = genreTypes;
}

const aBook = new Book("Kultahattu", "F. Scott Fitzgerald", 1925, ["Fiction", "Classic"]);
library.push(aBook);
console.log(library);


/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
// Sinun koodisi tähän
// Function to create a new book object
function createBook(title, author, publicationYear, genreTypes) {
    return {
        title: title,
        author: author,
        publicationYear: publicationYear,
        genreTypes: genreTypes
    };
}

// Example user inputs
const userTitle = "Sieppari ruispellossa";
const userAuthor = "J.D. Salinger";
const userPublicationYear = 1951;
const userGenreTypes = ["Fiction", "Realism"];

// Creating a new book object using the createBook function
const newBook = createBook(userTitle, userAuthor, userPublicationYear, userGenreTypes);

// Logging the new book object to the console
console.log(newBook);

/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
// Sinun koodisi tähän
const libraryJson = JSON.stringify(library, null, 2);
console.log("Kirjaston JSON-merkkijono:\n", libraryJson);

const libraryObject = JSON.parse(libraryJson);
console.log("Ensimmäisen kirjan nimi:", libraryObject[0].title);