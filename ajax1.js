// https://github.com/VMO2020/TXT-Read.git/
// WEB: https://vmo2020.github.io/TXT-Read/
// -------------------------  TXT ------------------------------
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
  document.querySelector(`#respuesta`).innerHTML = "Respuesta TXT";
};
// -------------------------  JSON ------------------------------
document.querySelector(`#boton2`).addEventListener(`click`, traerDatos2);

function traerDatos2(){
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "archivo.json", true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //console.log(this.responseText);
     document.querySelector(`#respuesta2`).innerHTML = this.responseText;
    }
  };

  document.querySelector(`#respuesta2`).innerHTML = "Texto JSON";
};
// -------------------------  IMG  ------------------------------
