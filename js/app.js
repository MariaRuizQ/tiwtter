document.getElementById('textarea').placeholder = '¿Qué estás pensando?';
function caracteres(){
  var max = new Number();
  max = 140;
  var actual = document.getElementById('textarea').value.length;
  var valor = new Number();
  valor = max - actual;
  if(valor > 0){
    if(valor == 1){
      valor = 0;
    }
    document.getElementById('characters-remaining').innerHTML = valor;
    document.getElementById('boton').disabled='';
  } else{
    document.getElementById('boton').disabled='disabled';
  }
}



var comentarios = document.getElementById("comentarios");
var boton = document.getElementById("boton");
var textarea = document.getElementById("textarea");
var nombre = document.getElementById("nombre");
var name;
var edicion = false;
function anadir() {
  if (
    textarea === null ||
    textarea.value.length === 0
  ) {
    textarea.value = "";
    textarea.focus();
  } else if (edicion === false) {
    if (
      nombre === null ||
      nombre.value.length === 0 ||
      /^\s+$/.test(nombre.value)
    ) {
    } else {
      name = nombre.value;
    }
    var div = document.createElement("div");
    comentarios.appendChild(div);
    var pnom = document.createElement("p");
    var p = document.createElement("p");
    var hr = document.createElement("hr");
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes;
    switch (fecha.getMonth()) {
      case 0:
        mes = "Enero";
        break;
      case 1:
        mes = "Febrero";
        break;
      case 2:
        mes = "Marzo";
        break;
      case 3:
        mes = "Abril";
        break;
      case 4:
        mes = "Mayo";
        break;
      case 5:
        mes = "Junio";
        break;
      case 6:
        mes = "Julio";
        break;
      case 7:
        mes = "Agosto";
        break;
      case 8:
        mes = "Septiembre";
        break;
      case 9:
        mes = "Octubre";
        break;
      case 10:
        mes = "Noviembre";
        break;
      case 11:
        mes = "Diciembre";
        break;
      default:
        break;
    }
    var year = fecha.getFullYear();
    var hora = fecha.getHours();
    if (hora < 10) {
      hora = "0" + hora;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    pnom.innerHTML =
      dia +
      " de " +
      mes +
      " del " +
      year +
      " a las " +
      hora +
      ":" +
      minutos +
      ".";
    p.innerHTML = textarea.value;
    pnom.setAttribute("class", "pnom");
    p.setAttribute("class", "p");
    hr.setAttribute("class", "hr");
    div.appendChild(pnom);
    div.appendChild(p);
    div.appendChild(hr);
    textarea.value = "";
    nombre.value = "";
    textarea.focus();
  }

  eliminar.addEventListener("click", eliminarc);
  function editarc() {
    var botone = document.createElement("input");
    botone.type = "button";
    botone.value = "Confirmar edicion";
    div.replaceChild(botone, editar);
    botone.setAttribute("class", "botone");
    textarea.value = p.innerText;
    p.innerHTML = "";
    nombre.value = name;
    textarea.focus();
    edicion = true;
    function edicionc() {
      if (
    textarea === null ||
    textarea.value.length === 0 ||
    /^\s+$/.test(textarea.value)
  ) {textatera.value = "";
    textarea.focus();} else {
      if (
      nombre === null ||
      nombre.value.length === 0 ||
      /^\s+$/.test(nombre.value)
    ) {
      name = "Anónimo";
    } else {
      name = nombre.value;
    }

      }
    }
    botone.addEventListener("click", edicionc);
  }
  editar.addEventListener("click", editarc);
}
boton.addEventListener("click", anadir);
function enter(event) {
  var codigo = event.keyCode;
  if (codigo == 13) {
    anadir();
    }
}
  textarea.addEventListener("keypress", enter);
