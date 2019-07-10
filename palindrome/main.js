console.log('cia');


// 1 -Una funzione per capire se la parola è palindroma;

// dichiaro var
var risultato, parola, elemento, risultatoparz;
elemento = document.getElementById('mio-id');

// chiedo parola e la metto in array
parola = [];
parola = prompt('inserisci una parola').split("");

console.log(parola);

// creo funzione
  function palindroma(a){
     // var a = [];
    console.log(a);

    var c = a.length - 1;

    //
    //  console.log(a);
    //
    for (var i = 0; i < a.length; i++){
      // console.log(a[i]);
      for (var j = c;  j >= 0; j--) {
        // console.log(a[j]);
        if (a[i] === a[j]){
          // console.log('questa è a ' + a);

          return 'La parola ' + a + ' è palindroma';

        }
        else {
          return 'La parola ' + a + ' non è palindroma';
        }

      }
    }



  }

// richiamo la funzione e restituisco risultato
parola = parola.join('');
risultato = palindroma(parola);

 console.log(risultato);

 // console.log(parola);

// for (var i = 0; i < parola.length; i++) {
//   risultatoparz = elemento.innerHTML;
//   risultato = risultatoparz  + parola[i];
//   console.log(risultato);
//   risultato.innerHTML;
// }
