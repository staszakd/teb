let zmienna = 18;
//let zmienna = 18;
document.write(zmienna);

let imie = "Janusz";
document.write("<br>Twoje imie: <br>" + imie);

// + konkatenacja

let a = 5, b = 3, suma;

suma = a + b;

document.write("<br>Suma a i b wynosi: <br>" + suma);

//potęgowanie

let potega = Math.pow(a, b);
//alert(potega); //wynik potegi 125

//reszta z dzielenia

let modulo = 11 % 4;
console.log(modulo);

//typy danych

let c = 3, d = 12.5;

console.log(typeof(c)); //number
console.log(typeof(d)); //number

d = "tekst";
console.log(typeof(d)); //string
let prawda = true;
console.log(typeof(prawda)); //string

let nic = null;
console.log(typeof(nic)); //object

let pusta;
console.log(typeof(pusta)); //undefined

//systemy liczbowe
let dziesietny = 10;
let oktalny = 012;

/*
 012 => 1 * 8^1 + 2 * 8 ^ 0 = 8 + 2 = 10
*/

let szesnastkowy = 0xA;

console.log(szesnastkowy);


//prompt

let liczba = prompt("Podaj pierwszą liczbe");

console.log('Pierwsza liczba wynosi: ' + liczba);

console.log(typeof(liczba));

/*
  Zadanie 1
  Użytkownik wprowadza z klawiatury dwie liczby
  Wyświetl na ekranie sumę tych liczb w formacie:
  "Suma a + b wynosi: ...."
*/
/*
 let l1 = prompt('Podaj pierwszą liczbę');
 let l2 = parseInt(prompt('Podaj drugą liczbę'));
 l1 = parseInt(l1);

 let dodawanie = l1 + l2;
 document.write("<br>Suma " + l1 + " i " + l2 + " wynosi: " + dodawanie);
*/

 /*
   Zadanie 1
   Użytkownik wprowadza z klawiatury dwie liczby (mogą być zmiennoprzecinkowe)
   Wyświetl na ekranie sumę tych liczb w formacie:
   "Suma a + b wynosi: ...."
 */

/*
 let s1 = prompt('Podaj pierwszą liczbę');
 let s2 = parsefloat(prompt('Podaj drugą liczbę'));
 s1 = parsefloat(s1);

 let dodawanie1 = s1 + s2;
 document.write("<br>Suma " + s1 + " i " + s2 + " wynosi: " + dodawanie1);
*/

//camel case
// liczbaPierwsza zmiennaPomocnicza mamNaImie


/*
  napisz program, który obliczy pole prostokąta
  Dane podaje użytkownik z klawiatury (liczby zmiennoprzecinkowe)
  Wynik wyświetl w formacie: "Bok a =...., bok b =....., pole wynosi: ....cm^2 (windeksie górnym)"
*/

let bok1 = parseFloat(prompt("podaj bok a: "));
let bok2 = parseFloat(prompt("podaj bok a:"));

let pole1 = bok1 * bok2;
document.write("<br>Bok a =" + " " + bok1  + "," + " bok b =" + " " + bok2 + "," + " pole wynosi: " + pole1 + "cm<sup>2</sup>");

/*
zad.dom
oblicz pole koła i trójkąta

*/
