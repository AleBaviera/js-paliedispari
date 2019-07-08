// 2 - L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.


// funzione pari
function pari(a){
  if (a % 2 == 0){
    return 'pari';
  }
  else {
    return 'dispari' ;
  }
}

// funzione random
function random(){
  return Math.floor(Math.random()* 5 + 1);
}

// funzione somma

function somma(num1, num2){
  return num1 + num2;
}



var scelta, primonum, secondonum;

scelta = prompt(' pari o dispari?');


primonum = random();
console.log(primonum);
secondonum = random();
console.log(secondonum);


if (scelta === pari(somma(primonum, secondonum))){
  console.log('hai vinto');
}
else {
  console.log('hai perso');
}
