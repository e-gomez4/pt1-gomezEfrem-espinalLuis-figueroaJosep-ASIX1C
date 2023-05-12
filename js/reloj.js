actualizaReloj()
function actualizaReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    if (hora < 10) hora = "0" + hora
    if (minuto < 10) minuto = "0" + minuto
    if (segundo < 10) segundo = "0" + segundo

    horaImprimible = hora + " : " + minuto + " : " + segundo

    //document.title = horaImprimible
    horaActual.innerHTML = horaImprimible

    setTimeout("actualizaReloj()", 1000)
}
 

function alarmar() {
  var momentoActual = new Date();
  var hora = momentoActual.getHours();
  var minuto = momentoActual.getMinutes();
  var segundo = momentoActual.getSeconds();

  var inputHora = document.getElementById("horaAlarma");
  var horaAlarma = inputHora.value;

  if (horaAlarma === "") {
    alert("Por favor, selecciona una hora válida.");
    return;
  }

  var partesHora = horaAlarma.split(":");
  var horaSeleccionada = parseInt(partesHora[0]);
  var minutoSeleccionado = parseInt(partesHora[1]);

  var segundoAlarma = 0;

  var tiempoActual = hora * 3600 + minuto * 60 + segundo;
  var tiempoAlarma = horaSeleccionada * 3600 + minutoSeleccionado * 60 + segundoAlarma;

  

  var tiempoFaltante = tiempoAlarma - tiempoActual;

  var horasFaltantes = Math.floor(tiempoFaltante / 3600);
  var minutosFaltantes = Math.floor((tiempoFaltante % 3600) / 60);
  var segundosFaltantes = tiempoFaltante % 60;

  var contador = document.getElementById("contador");
  contador.innerHTML = horasFaltantes + ":" + minutosFaltantes + ":" + segundosFaltantes;

  var hfin = document.getElementById("hfin");
  hfin.innerHTML = horaSeleccionada + ":" + minutoSeleccionado + ":" + segundoAlarma;

  contador.style.display = "block";
  hfin.style.display = "block";

  if (tiempoFaltante > 0) {
    setTimeout(alarmar, 1000);
  } else {
    alert("¡Es hora de la alarma!");
  }
}
alarmar()
