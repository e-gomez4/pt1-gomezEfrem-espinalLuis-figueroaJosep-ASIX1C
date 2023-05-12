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

