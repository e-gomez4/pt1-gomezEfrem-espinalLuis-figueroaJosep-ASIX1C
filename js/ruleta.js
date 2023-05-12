const nombres = ["Juan", "Pedro", "María", "Ana", "Luis", "Sofía"];
const colores = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];

let anguloActual = 0;
let rotacionActual = 0;
let velocidadRotacion = 0;
let esGirando = false;

function dibujarRuleta() {
    const canvas = document.getElementById("ruleta");
    const ctx = canvas.getContext("2d");

    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radio = Math.min(x, y) * 0.8;
    const anguloPorSeccion = (2 * Math.PI) / nombres.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nombres.length; i++) {
        const nombre = nombres[i];
        const inicio = i * anguloPorSeccion;
        const fin = (i + 1) * anguloPorSeccion;

        ctx.beginPath();
        ctx.arc(x, y, radio, inicio, fin);
        ctx.lineTo(x, y);
        ctx.fillStyle = colores[i % colores.length];
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(inicio + (anguloPorSeccion / 2));
        ctx.textAlign = "right";
        ctx.fillStyle = "black";
        ctx.font = "bold 16px Arial";
        ctx.fillText(nombre, radio - 10, 0);
        ctx.restore();
    }
}

function reiniciarRuleta() {
    const canvas = document.getElementById("ruleta");
    const sonido = document.getElementById("sonido");

    esGirando = false;
    anguloActual = 0;
    rotacionActual = 0;
    velocidadRotacion = 0;

    canvas.style.transform = `rotate(${rotacionActual}deg)`;
    sonido.pause();
    sonido.currentTime = 0;

    dibujarRuleta();
}

function girarRuleta() {
    reiniciarRuleta()
    if (esGirando) {
        return;
    }

    esGirando = true;

    const canvas = document.getElementById("ruleta");
    const sonido = document.getElementById("sonido");

    const vueltas = Math.floor(Math.random() * nombres.length) + nombres.length;
    const anguloPorVuelta = (2 * Math.PI) / nombres.length;

    velocidadRotacion = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const tiempoTotal = (vueltas * anguloPorVuelta) / velocidadRotacion * 1000;

    sonido.play();

    const interval = setInterval(() => {
        anguloActual += velocidadRotacion * Math.PI / 180;

        if (anguloActual >= (2 * Math.PI)) {
            anguloActual -= (2 * Math.PI);
        }

        rotacionActual += velocidadRotacion;
        canvas.style.transform = `rotate(${rotacionActual}deg)`;
        if (rotacionActual >= (360 * vueltas)) {
            clearInterval(interval);
            const indiceGanador = Math.floor(anguloActual / anguloPorVuelta);
            const nombreGanador = nombres[indiceGanador];
            document.getElementById("ganador").textContent = `El ganador es ${nombreGanador}!`;
            esGirando = false;
            sonido.pause();
            sonido.currentTime = 0;
        }
    }, velocidadRotacion);

    setTimeout(() => {
        clearInterval(interval);
        const indiceGanador = Math.floor(anguloActual / anguloPorVuelta);
        const nombreGanador = nombres[indiceGanador];
        document.getElementById("ganador").textContent = `El ganador es ${nombreGanador}!`;
        esGirando = false;
        sonido.pause();
        sonido.currentTime = 0;
    }, tiempoTotal);
}
