//console.log(`activo`);

document.querySelector(`#boton`).addEventListener(`click`, traerDatos);

function traerDatos(){
  //console.log(`funcion activada`);

  // Instanciar la constante "xhttp"
  const xhttp = new XMLHttpRequest();
  // Indicar ruta del archivo
  xhttp.open("GET", "archivo.txt", true); // true para que sea en forma asincrona
  // Enviar
  xhttp.send();
  // Esperar un cambio "onreadystatechange", this = xhttp
  // readyState == 4: request finiched and response is ready
  // status == 200: "OK" todo bien
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //console.log(this.responseText);
     document.querySelector(`#respuesta`).innerHTML = this.responseText;
    }
  };
  // document.querySelector(`#respuesta`).innerHTML = "Respuesta";
};

// https://vmo2020.github.io/TXT-Read/
