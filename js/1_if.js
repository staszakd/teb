let k = document.getElementById('komunikat');

let x = prompt ('Podaj co obliczyć', 'k - kwadrat, p - prostokąt, t - trójkąt');

let pole, boka, bokb;

if (x == 'k'){
  boka = prompt('Podaj długość boku: ');
  pole = boka * boka;
  k.innerHTML = 'Pole kwadratu wynosi: ' + pole + 'cm<sup>2</sup>';
} else if (x == 'p'){
  boka = prompt('Podaj długość boku a: ');
  bokb = prompt('Podaj długość boku b: ');
  pole = boka * bokb;
  k.innerHTML = 'Pole prostokąt wynosi: ' + pole + 'cm<sup>2</sup>';
}else if(x == 't'){
  boka = prompt('Podaj długość podstawy: ');
  bokb = prompt('Podaj długość wysokości: ');
  pole = 0.5 * boka *bokb;
  k.innerHTML = 'Pole trójkąta  wynosi: ' + pole + 'cm<sup>2</sup>';
}else{
  k.innerHTML = '<span style="color: red";>Błędne dane!</span>';
}
