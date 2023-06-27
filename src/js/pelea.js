const mensaje = document.getElementById("mensaje"),
  barra = document.querySelector(".progreso"),
  cajaProgreso = document.querySelector(".seccion_carga");
let porciento = 0;
let ganador = "";
const progreso = setInterval(() => {
  mensaje.textContent = `Calculando daño y vida : ${porciento}%`;
  barra.style.width = `${porciento}%`;
  if (porciento < 100) {
    porciento++;
  } else {
    clearInterval(progreso);
    setTimeout(() => {
      cajaProgreso.style.display = "none";
      power();
      setTimeout(() => {
        fight();
      }, 3000);
    }, 1000);
  }
}, 50);
const estadisticas = document.querySelectorAll(".power");
let poderEnemigo = Math.round(Math.random() * 500),
  vidaEnemigo = Math.round(Math.random() * 3000),
  vidaJugador = Math.round(Math.random() * 3000),
  poderJugador = Math.round(Math.random() * 500);

function power() {
  estadisticas.forEach((estadistica) => {
    estadistica.style.display = "flex";
  });
  const hpEnemigo = document.querySelector(".vida_enemigo"),
    atackEnemigo = document.querySelector(".poder_enemigo"),
    hpJugador = document.querySelector(".vida_jugador"),
    atackJugador = document.querySelector(".poder_jugador");
  hpEnemigo.textContent = vidaEnemigo;
  atackEnemigo.textContent = poderEnemigo;
  hpJugador.textContent = vidaJugador;
  atackJugador.textContent = poderJugador;
}
function sacarPorciento(entero, resto) {
  let porcentual = (resto / entero) * 100;
  return porcentual;
}
function fight() {
  const versus = document.querySelector(".versus");
  const barraPelea = document.querySelectorAll(".box_vida");
  versus.style.display = "block";
  barraPelea.forEach((barra)=>{
    barra.style.display = "block";
  })
  const figthEnemigo = document.querySelector(".enem_vid");
  const figthJugador = document.querySelector(".jug_vid");
  let progresoEnemy = vidaEnemigo,
    progresoJugador = vidaJugador;
  const pelea = setInterval(() => {
    figthEnemigo.style.width = sacarPorciento(vidaEnemigo, progresoEnemy) + "%";
    figthJugador.style.width =
      sacarPorciento(vidaJugador, progresoJugador) + "%";
    if (progresoJugador < 0) {
      clearInterval(pelea);
      ganador = "red";
      ganadorPelea();
    } else if (progresoEnemy < 0) {
      clearInterval(pelea);
      ganador = "blue";
      ganadorPelea();
    } else {
      progresoEnemy -= poderJugador;
      progresoJugador -= poderEnemigo;
    }
  }, 1000);
}
function ganadorPelea() {
  const mensajeResultado = document.querySelector(".mensaje_resultado"),
    imagenResultado = document.querySelector(".imagen_resultado"),
    resultadoPArtida = document.querySelector(".resultado");
    console.log(mensajeResultado)
  resultadoPArtida.style.display = "flex";
  if (ganador == "blue") {
    mensajeResultado.textContent = "Victoria";
    imagenResultado.src = "../img/victory.png";
  } else {
    mensajeResultado.textContent = "Derrota";
    imagenResultado.src = "../img/defeat.png";
  }
}
const regresar = document.querySelector(".regresar");
regresar.addEventListener("click",()=>{
    window.location.href="./../../index.html"
})
