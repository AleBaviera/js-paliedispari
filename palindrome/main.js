console.log('cia');


// 1 -Una funzione per capire se la parola è palindroma;

// dichiaro var
var risultato, parola;

// chiedo parola e la metto in array
parola = [];
// parola = prompt('inserisci una parola');

// creo funzione
  function palindroma(){
    var a = [];
    a = prompt('inserisci una parola').split(",");
    var b = [];
    var c = a.length;
    // var b = a.reverse();


    for (var i = 0; i < a.length; i++)
    for (var j = c;  j < b.length; j--) {

      if (a === b){
        console.log('questa è a ' + a);
        console.log('questa è b ' + b);
        return 'è palindroma';

      }
      else {
        return ' non è palindroma';
      }

    }
  }

// richiamo la funzione e restituisco risultato

risultato = palindroma(parola);

console.log(risultato);
