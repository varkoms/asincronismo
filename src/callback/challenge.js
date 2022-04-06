// Utilizamos en esta clase "XMLHttpRequest" por el momento, ya que aun no implementamos las Promises
// Por eso se utiliza "XMLHttpRequest" en lugar de "Fetch", que seria lo mas adecuado.

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true); // El tercer parametro permite activar el asincronismo, aunque por defecto, ya viene como true
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {  // request finished and response is ready
      if (xhttp.status === 200) { // El servidor respondio con "OK"
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error ' + url_api);
        return callback(error, null);
      }
    }
  }

  xhttp.send(); //Enviamos la solicitud
}