//Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
//2, 98, 4, 96, 6, 62 ja niin edelleen. Tulosta luvut samalle riville.

//Создать программу, которая печатает все четные целые числа от 1 до 99, представляя их следующим образом
//2, 98, 4, 96, 6, 62 и так далее. Выведите числа в одной строке.

for (let i = 2; i < 100; i += 2) {
  console.log(i);
}

let j = 2;
while (j < 100) {
  console.log(j);
  j += 2;
}

let l = "";
for (let k = 1; k < 100; k += 2) {
  l += k + ", ";
}
