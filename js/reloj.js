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
 

function configurarAlarma() {
  var inputHora = document.getElementById("horaAlarma");
  var horaAlarma = inputHora.value;
  var hora = parseInt(horaAlarma[0]);
  var minuto = parseInt(horaAlarma[1]);
  var segundo = parseInt(horaAlarma[2]);

  var momentoActual = new Date();
  var horaActual = momentoActual.getHours();
  var minutoActual = momentoActual.getMinutes();
  var segundoActual = momentoActual.getSeconds();

  if (horaActual < 10) horaActual = "0" + horaActual
    if (minutoActual < 10) minutoActual = "0" + minutoActual
    if ( minutoActual < 10) segundoActual = "0" + segundoActual

  var tiempoActual = horaActual * 3600 + minutoActual * 60 + segundoActual;
  var tiempoAlarma = hora * 3600 + minuto * 60 + segundo;



  /*if (tiempoAlarma <= tiempoActual) {
    tiempoAlarma += 24 * 3600;  // Sumar 24 horas si la alarma ya pasó en el día actual
  }*/

  var tiempoFaltante = tiempoAlarma - tiempoActual;

  var horasFaltantes = Math.floor(tiempoFaltante / 3600);
  var minutosFaltantes = Math.floor((tiempoFaltante % 3600) / 60);
  var segundosFaltantes = tiempoFaltante % 60;

  var contador = document.getElementById("contador");
  contador.innerHTML = horasFaltantes + ":" + minutosFaltantes + ":" + segundosFaltantes;

  var hfin = document.getElementById("hfin");
  hfin.innerHTML = hora + ":" + minuto + ":" + segundo;

  if (tiempoFaltante > 0) {
    setTimeout(configurarAlarma, 1000);
  } else {
    alert("¡Es hora de la alarma!");
  }
}
