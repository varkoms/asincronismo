// Transformando a ES6

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); // El tercer parametro permite activar el asincronismo, aunque por defecto, ya viene como true
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4) {  // request finished and response is ready
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error ', url_api));
      }
    });
    xhttp.send(); //Enviamos la solicitud
  });
}

module.exports = fetchData;