// Tehtävä 1: Olion luominen ja tulostaminen
/*
Luo olio nimeltään `henkilö` ominaisuuksilla: `nimi` asetettuna "Aleksi" ja `ikä` asetettuna 30.
Tulosta tämä olio konsoliin.
*/
// Kirjoita olio tähän

const person = {
    name: "Aleksi",
    age: 30
};

console.log(person);

// Tehtävä 2: Olio-ominaisuuksien käyttäminen
/*
Käytä ja kirjaa `nimi` ja `ikä` henkilö-oliosta.
*/
// Kirjoita koodisi tähän
const name = person.name;
const age = person.age;

console.log("Nimi:", name);
console.log("Ikä:", age);

// Tehtävä 3: Olion ominaisuuksien muokkaaminen
/*
Päivitä `henkilö`-olio: aseta `ikä` arvoon 31. Lisää sitten uusi ominaisuus `maa` asetettuna "Kroatia".
Kirjaa päivitetty olio.
*/
// Kirjoita koodisi tähän
person.age = 31;
person.country = "Kroatia";

console.log(person);

// Tehtävä 4: Sisäkkäiset oliot
/*
Luo olio `opiskelija` ominaisuuksilla: `nimi` arvolla "Emilia" ja `tiedot` oliona, jossa ominaisuudet `ikä` asetettuna 22 ja `kurssi` asetettuna "JavaScript".
Kirjaa `opiskelijan` `kurssi`.
Odotettu tulos: "Kurssi: JavaScript"
*/
// Kirjoita olio ja koodisi tähän
const student = {
    name: "Emilia",
    data: {
        age: 22,
        course: "JavaScript"
    }
};

console.log("Kurssi:", student.data.course);


// Tehtävä 5: Ominaisuuksien poistaminen
/*
Poista `henkilö`-oliosta ominaisuus `ikä`. Kirjaa saatu olio.
Odotettu tulos: { nimi: "Aleksi", maa: "Kroatia" }
*/
// Kirjoita koodisi tähän
delete person.age;
console.log(person);

// Tehtävä 6: Olion avaimet ja arvot
/*
Kirjaa kaikki ominaisuuden nimet (avaimet) `henkilö`-oliosta, sitten kirjaa kaikki ominaisuuden arvot.
Odotetut tulokset:
Avaimet: nimi, maa
Arvot: Aleksi, Kroatia
*/
// Kirjoita koodisi tähän
console.log("Avaimet:", Object.keys(person));
console.log("Arvot:", Object.values(person));

// Tehtävä 7: Olion metodien käyttäminen
/*
Määritä metodi `tervehdi` sisälle `henkilö`-olioon, joka palauttaa "Hei, nimeni on Aleksi".
Kutsu tätä metodia ja kirjaa tulos.
Odotettu tulos: "Hei, nimeni on Aleksi"
*/
// Muokkaa henkilö-oliota ja kirjoita metodin kutsuminen tähän
person.greet = function () {
    return "Hi, my name is " + this.name;
}
const result = person.greet();
console.log(result);