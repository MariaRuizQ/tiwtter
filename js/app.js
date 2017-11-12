function caracteres(){
  var max = new Number();
  max = 140;
  var actual = document.getElementById('message').value.length;
  var valor = new Number();
  valor = max - actual;
  if(valor > 0){
    if(valor == 1){
      valor = 0;
    }
    document.getElementById('characters-remaining').innerHTML = valor;
    document.getElementById('button').disabled='';
  } else{
    document.getElementById('button').disabled='disabled';
  }
}

function enviado(){
  var twettValido = document.getElementById('message').checkValidity();
  alert("hola") ;
}
