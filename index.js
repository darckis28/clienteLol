const btn_start = document.getElementById("start"),
  partida = document.querySelector(".container__aceptar"),
  btn_cancelar = document.querySelector(".cancelar"),
  progress = document.querySelector(".circle_exterior");
let porcentaje = 0;
let active;
const iniciar = () => {
  active = setInterval(() => {
    if (porcentaje <= 100) {
      console.log(progress);
      progress.style.background = ` conic-gradient(#30fbdc ${
        porcentaje * 3.6
      }deg, rgba(0 0 0 /.5) 0deg)`;
      porcentaje++;
    } else {
      clearInterval(active);
    }
  }, 80);
};
let time = document.querySelector(".nombre_part"),
  contenedor_players = document.querySelector(".details");
let espera;
let min = (seg = mil = 0);
const timer = () => {
  espera = setInterval(() => {
    mil++;
    if (mil > 9) {
      mil = 0;
      seg++;
    }

    time.textContent = `${min}:${seg}${mil}`;
    if (seg == 1) {
      seg = 0;
      partida.style.display = "flex";
      clearInterval(espera);
      iniciar();
    }
  }, 1000);
};
const online = document.querySelector(".online"),
  circle = document.querySelector(".circle"),
  btn_aceptar = document.querySelector(".aceptar_partida"),
  btnQuitarCola = document.querySelector(".cancel");

btn_start.addEventListener("click", () => {
  btn_start.disabled = true;
  online.textContent = "en cola";
  online.style.color = "blue";
  circle.style.backgroundColor = "blue";
  circle.style.borderColor = "#14fafd";
  contenedor_players.style.backgroundColor = " rgba(26, 208, 232, 0.363)";

  timer();
});
btn_cancelar.addEventListener("click", () => {
  clearInterval(active);
  porcentaje = 0;
  progress.style.background = ` conic-gradient(#353333 360deg, rgba(0 0 0 /.5) 0deg)`;
  btn_aceptar.disabled = true;
  setTimeout(() => {
    partida.style.display = "none";
    reset();
  }, 5000);
});
btnQuitarCola.addEventListener("click", () => {
  clearInterval(espera);
  reset();
});
function reset() {
  btn_start.disabled = false;
  btn_aceptar.disabled = false;
  online.textContent = "online";
  online.style.color = "#2d770c";
  circle.style.backgroundColor = "#2d770c";
  circle.style.borderColor = "#7dfe41";
  contenedor_players.style.backgroundColor = "rgba(16, 76, 197, 0.363)";
  time.textContent = "Selección oculta";
}
const aceptarPartida = document.querySelector(".aceptar_partida");
aceptarPartida.addEventListener("click", () => {
  clearInterval(active);
  porcentaje = 0;
  progress.style.background = ` conic-gradient(#91ffeb 360deg, rgba(0 0 0 /.5) 0deg)`;
  setTimeout(()=>{
  window.location.href = "clienteLol/assets/pages/Espera.html";
  },2000)
});
