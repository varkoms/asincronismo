// Utilizamos en esta clase "XMLHttpRequest" por el momento, ya que aun no implementamos las Promises
// Por eso se utiliza "XMLHttpRequest" en lugar de "Fetch", que seria lo mas adecuado.

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true); // El tercer parametro permite activar el asincronismo, aunque por defecto, ya viene como true
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {  // request finished and response is ready
      if (xhttp.status === 200) { // El servidor respondio con "OK"
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error ' + url_api);
        return callback(error, null);
      }
    }
  }

  xhttp.send(); //Enviamos la solicitud
}

// Callback Hell XD
// ESTO ES UNA MALA, PERO MUUUY MALA PRACTICA!!
// Si tienes mas de 3 peticiones, NO USAR CALLBACKS, en su lugar, usar Promises.

fetchData(API, function(error1, data1){
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function(error2, data2){
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, function(error3, data3) {
      if(error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});