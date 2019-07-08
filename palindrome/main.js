console.log('cia');


// 1 -Una funzione per capire se la parola è palindroma;

// dichiaro var
var risultato, parola;

// chiedo parola e la metto in array
parola = [];
parola = prompt('inserisci una parola').split("");

console.log(parola);

// creo funzione
  function palindroma(a){
    // var a = [];
    console.log(a);
    // a = prompt('inserisci una parola').split(",");
    // var b = [];
    var c = a.length - 1;
    // var b = a.reverse();
    //  console.log(b);
    //
    //  console.log(a);
    //
    for (var i = 0; i < a.length; i++){
      console.log(a[i]);
      for (var j = c;  j >= 0; j--) {
        console.log(a[j]);
        if (a[i] === a[j]){
          console.log('questa è a ' + a);
          // console.log('questa è b ' + b);
          return 'è palindroma';

        }
        else {
          return ' non è palindroma';
        }

      }
    }



  }

// richiamo la funzione e restituisco risultato
console.log('letta al contrario è' + palindroma(parola));
risultato = palindroma(parola);

console.log(risultato);
