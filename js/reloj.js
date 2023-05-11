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
 /*alarmar()
function alarmar(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    var horaAlarma= 10;
    var minutAlarma= 44;
    var segundoAlarm=0;

    var tiempoFaltante= new Date();
    tiempoFaltante.setHours(horaAlarma,minutAlarma,segundoAlarm,0) - momentoActual;

    var horasFaltantes = Math.floor(tiempoFaltante / (1000 * 60 * 60));
    var minutosFaltantes = Math.floor((tiempoFaltante % (1000 * 60 * 60)) / (1000 * 60));
    var segundosFaltantes = Math.floor((tiempoFaltante % (1000 * 60)) / 1000);
  
    var contador=document.getElementById("contador")
    contador.innerHTML=horasFaltantes+":"+minutosFaltantes +":"+segundosFaltantes
    var hfin = document.getElementById("hfin");
    hfin.innerHTML=horaAlarma+":"+minutAlarma+":"+segundoAlarm;

    if (tiempoFaltante > 0) {
        setTimeout(configurarAlarma, 1000);
      } else {
        alert("¡Es hora de la alarma!");
      }
}*/
function alarmar() {
    var momentoActual = new Date();
    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    var segundo = momentoActual.getSeconds();
  
    var horaAlarma = 10;
    var minutoAlarma = 44;
    var segundoAlarma = 0;
  
    var tiempoActual = hora * 3600 + minuto * 60 + segundo;
    var tiempoAlarma = horaAlarma * 3600 + minutoAlarma * 60 + segundoAlarma;
  
    if (tiempoAlarma <= tiempoActual) {
      tiempoAlarma += 24 * 3600;  // Sumar 24 horas si la alarma ya pasó en el día actual
    }
  
    var tiempoFaltante = tiempoAlarma - tiempoActual;
  
    var horasFaltantes = Math.floor(tiempoFaltante / 3600);
    var minutosFaltantes = Math.floor((tiempoFaltante % 3600) / 60);
    var segundosFaltantes = tiempoFaltante % 60;
  
    var contador = document.getElementById("contador");
    contador.innerHTML = horasFaltantes + ":" + minutosFaltantes + ":" + segundosFaltantes;
  
    var hfin = document.getElementById("hfin");
    hfin.innerHTML = horaAlarma + ":" + minutoAlarma + ":" + segundoAlarma;
  
    if (tiempoFaltante > 0) {
      setTimeout(alarmar, 1000);
    } else {
      alert("¡Es hora de la alarma!");
    }
  }
  

