<<<<<<< HEAD
const array_concursantes=
    [
        'Daniela Salvador Caballero'
        ,'LeoGarcia01'
        ,'Gaspak'
        ,'Oxmar Yamith'
        ,'Mauro Toranzo'
        ,'Gerardo Garcia Hernandez'
        ,'Pierre Zurita Ramirez'
        ,'Pierre Zurita Ramirez'
        ,'Daniela Salvador Caballero'
        ,'samp play'
        ,'Eduardo Joel Paucarpura Sanchez'
        ,'Anthony Espino'
        ,'Jordan Team'
        ,'Gerardo Garcia Hernandez'
        ,'Anthony Espino'
        ,'Oxmar Yamith'
        ,'Oxmar Yamith'
        ,'Oxmar Yamith'
        ,'Oxmar Yamith'
        ,'Oxmar Yamith'
        ,'Gerardo Garcia Hernandez'
        ,'TheComicalCanadian'
    ];
document.addEventListener('DOMContentLoaded', function() {
    let pos_ini=0;
    let clic=0;
    let grados_girados = 0; // añadido

    function sortear(){
        if (clic==0) {
            let canvas=document.getElementById("idcanvas");
            let grados_objetivo = Math.floor(Math.random() * (1440 - 720 + 1)) + 720; // genera un número aleatorio de grados (entre 2 y 4 vueltas completas)
            grados_girados = 0;
            movement=setInterval(function(){
                pos_ini+=10;
                grados_girados += 10; // aumenta los grados girados en cada iteración
                canvas.style.transform='rotate('+pos_ini+'deg)';
                if (grados_girados >= grados_objetivo) { // detiene la ruleta al alcanzar el número de grados objetivo
                    clearInterval(movement);
                    clic=0;
                    document.getElementById("idestado").innerHTML="Sortear";
                }
            },10);
            clic=1;
            document.getElementById("idestado").innerHTML="Detener";
        }else{
            clearInterval(movement);
            clic=0;
            document.getElementById("idestado").innerHTML="Sortear";
        }
    }

    let canvas=document.getElementById("idcanvas");
    let context=canvas.getContext("2d");
    let center=canvas.width/2;

    context.beginPath();
    context.moveTo(center,center);
    context.arc(center,center,center,0, 2*Math.PI);
    context.lineTo(center,center);
    context.fillStyle ='#33333333';
    context.fill();

    context.beginPath();
    context.moveTo(center,center);
    context.arc(center,center,center-10,0, 2*Math.PI);
    context.lineTo(center,center);
    context.fillStyle ='black';
    context.fill();

    for (var i = 0; i < array_concursantes.length; i++) {
        context.beginPath();
        context.moveTo(center,center);
        context.arc(center,center,center-20,i*2*Math.PI/array_concursantes.length, (i+1)*2*Math.PI/array_concursantes.length);
        context.lineTo(center,center);
        context.fillStyle =random_color();
        context.fill();

        context.save();
        context.translate(center, center);
        context.rotate(3*2*Math.PI/(5*array_concursantes.length)+i*2*Math.PI/array_concursantes.length);
        context.translate(-center, -center);
        context.font = "13px Comic Sans MS";
        context.textAlign = "right";
        context.fillStyle = "white";
        context.fillText(array_concursantes[i], canvas.width-30, center);
        context.restore();
    }

    let movement;

    function random_color(){
        let ar_digit=['2','3','4','5','6','7','8','9'];
        let color='';
        let i=0;
        while(i<6){
            let pos=Math.round(Math.random()*(ar_digit.length-1));
            color=color+''+ar_digit[pos];
            i++;
        }
        return '#'+color;
    }
});
=======
// Obtener el canvas y el contexto
var canvas = document.getElementById('canvas-ruleta');
var ctx = canvas.getContext('2d');

// Configurar el canvas
canvas.width = 500;
canvas.height = 500;

// Configurar la ruleta
var nombres = ['Premio 1', 'Premio 2', 'Premio 3', 'Premio 4', 'Premio 5', 'Premio 6', 'Premio 7', 'Premio 8', 'Premio 9', 'Premio 10'];
var numSectores = nombres.length;
var anguloSector = 2 * Math.PI / numSectores;
var radio = 200;
var centroX = canvas.width / 2;
var centroY = canvas.height / 2;

// Configurar la flecha
var flecha = {
  x: centroX,
  y: centroY - radio - 20,
  tamano: 30
};

// Función para dibujar la ruleta
function dibujarRuleta() {
  // Dibujar los sectores
  for (var i = 0; i < numSectores; i++) {
    ctx.beginPath();
    ctx.fillStyle = i % 2 === 0 ? '#FF4136' : '#2ECC40';
    ctx.moveTo(centroX, centroY);
    ctx.arc(centroX, centroY, radio, i * anguloSector, (i + 1) * anguloSector);
    ctx.fill();
    ctx.closePath();
  }

  // Dibujar la flecha fija
  ctx.beginPath();
  ctx.fillStyle = '#FF0000';
  ctx.moveTo(flecha.x, flecha.y - flecha.tamano - 10);
  ctx.lineTo(flecha.x - flecha.tamano / 2, flecha.y - 10);
  ctx.lineTo(flecha.x + flecha.tamano / 2, flecha.y - 10);
  ctx.fill();
  ctx.closePath();

  // Dibujar los bordes
  ctx.beginPath();
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

// Función para animar la ruleta
var aceleracionRotacion = 0;
var velocidadRotacion = 0;
var rotacion = 0;
var tiempoInicioAnimacion = null;
var duracionAnimacion = 3000;

function animarRuleta(timestamp) {
  // Inicializar el tiempo de inicio de la animación
  if (!tiempoInicioAnimacion) {
    tiempoInicioAnimacion = timestamp;
  }

  // Calcular el tiempo transcurrido desde el inicio de la animación
  var tiempoTranscurrido = timestamp - tiempoInicioAnimacion;

  // Calcular la velocidad de rotación en función de la aceleración y el tiempo transcurrido
  velocidadRotacion += aceleracionRotacion * tiempoTranscurrido;

  // Calcular la rotación en función de la velocidad y el tiempo transcurrido
  rotacion += velocidadRotacion * tiempoTranscurrido;

  // Redibujar la ruleta en su posición actual
  dibujarRuleta();

  // Calcular el índice del sector ganador
  var indiceGanador = Math.floor((nombres.length)
  // Obtener el canvas y el contexto
var canvas = document.getElementById('canvas-ruleta');
var ctx = canvas.getContext('2d');

// Configurar el canvas
canvas.width = 500;
canvas.height = 500;

// Configurar la ruleta
var nombres = ['Premio 1', 'Premio 2', 'Premio 3', 'Premio 4', 'Premio 5', 'Premio 6', 'Premio 7', 'Premio 8', 'Premio 9', 'Premio 10'];
var numSectores = nombres.length;
var anguloSector = 2 * Math.PI / numSectores;
var radio = 200;
var centroX = canvas.width / 2;
var centroY = canvas.height / 2;

// Configurar la flecha
var flecha = {
  x: centroX,
  y: centroY - radio - 20,
  tamano: 30
};

// Función para dibujar la ruleta
function dibujarRuleta() {
  // Dibujar los sectores
  for (var i = 0; i < numSectores; i++) {
    ctx.beginPath();
    ctx.fillStyle = i % 2 === 0 ? '#FF4136' : '#2ECC40';
    ctx.moveTo(centroX, centroY);
    ctx.arc(centroX, centroY, radio, i * anguloSector, (i + 1) * anguloSector);
    ctx.fill();
    ctx.closePath();
  }

  // Dibujar la flecha fija
  ctx.beginPath();
  ctx.fillStyle = '#FF0000';
  ctx.moveTo(flecha.x, flecha.y - flecha.tamano - 10);
  ctx.lineTo(flecha.x - flecha.tamano / 2, flecha.y - 10);
  ctx.lineTo(flecha.x + flecha.tamano / 2, flecha.y - 10);
  ctx.fill();
  ctx.closePath();

  // Dibujar los bordes
  ctx.beginPath();
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

// Función para animar la ruleta
var aceleracionRotacion = 0;
var velocidadRotacion = 0;
var rotacion = 0;
var tiempoInicioAnimacion = null;
var duracionAnimacion = 3000;

function animarRuleta(timestamp) {
  // Inicializar el tiempo de inicio de la animación
  if (!tiempoInicioAnimacion) {
    tiempoInicioAnimacion = timestamp;
  }

  // Calcular el tiempo transcurrido desde el inicio de la animación
  var tiempoTranscurrido = timestamp - tiempoInicioAnimacion;

  // Calcular la velocidad de rotación en función de la aceleración y el tiempo transcurrido
  velocidadRotacion += aceleracionRotacion * tiempoTranscurrido;

  // Calcular la rotación en función de la velocidad y el tiempo transcurrido
  rotacion += velocidadRotacion * tiempoTranscurrido;

  // Redibujar la ruleta en su posición actual
  dibujarRuleta();

  // Calcular el índice del sector ganador
  var indiceGanador = Math.floor((nombres.length

>>>>>>> 65823b3 (a)
