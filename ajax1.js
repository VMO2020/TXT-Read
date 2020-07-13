// https://github.com/VMO2020/TXT-Read.git/
// WEB: https://vmo2020.github.io/TXT-Read/
// -------------------------  TXT ------------------------------
document.querySelector(`#boton`).addEventListener(`click`, traerDatos);

function traerDatos(){
  //console.log(`funcion activada`);

  // Instanciar la constante "xhttp"
  const xhttp = new XMLHttpRequest();
  // Indicar ruta del archivo, si esta en la misma carpeta solo el nombre.txt
  // true para que sea en forma asincrona (Continuar codigo por atras) o
  // false para sincronica (Esperar respuesta para continuar con el codigo)
  xhttp.open("GET", "archivo.txt", true);
  // Enviar solicitud al servidor
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
  //document.querySelector(`#respuesta`).innerHTML = "Respuesta TXT";
};
// -------------------------  JSON ------------------------------
document.querySelector(`#boton2`).addEventListener(`click`, traerDatos2);

function traerDatos2(){
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "archivo.json", true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.querySelector(`#respuesta2`).innerHTML = this.responseText;
    }
  };

  //document.querySelector(`#respuesta2`).innerHTML = "Texto JSON";
};
// -------------------------  ARRAY  ------------------------------
document.querySelector(`#boton3`).addEventListener(`click`, traerDatos3);

var arrayData = new Array();
var archivoTxt = new XMLHttpRequest();
var fileRuta = "array.txt";

function traerDatos3(){

  archivoTxt.open("GET",fileRuta,false);
  archivoTxt.send(null);
  var txt = archivoTxt.responseText;

  for (var i = 0; i < txt.length; i++){
    arrayData.push(txt[i]);
  }
  document.querySelector(`#respuesta3`).innerHTML = txt;
};
// -------------------------  TABLA JSON, Array de Objetos  ------------------------------
document.querySelector(`#boton4`).addEventListener(`click`, traerDatos4);

function traerDatos4(){
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "archivo.json", true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      let datos = JSON.parse(this.responseText);
      let res = document.querySelector(`#respuesta4`);
      res.innerHTML = ""; // Limpiar html

      for(let item of datos){
        res.innerHTML += `<tr> <td>${item.nombreColor}</td> <td>${item.valorHexadec}</td> </tr>`; 
      };
    };
  };
};
