/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const sujetos = [
  "Mi perro",
  "Mi abuela",
  "Mi amigo",
  "Un ninja",
  "Un zombi",
  "Un extraterrestre"
];

const acciones = [
  "se comió",
  "destruyó",
  "perdió",
  "robó",
  "rompió",
  "escondió"
];

const posesiones = [
  "mi tarea",
  "mis llaves del coche",
  "mi billetera",
  "mi teléfono",
  "mis zapatos",
  "mi almuerzo"
];

const lugares = [
  "en el parque",
  "en mi casa",
  "en la escuela",
  "en el centro comercial",
  "en el bosque",
  "en la luna"
];

function generateExcuse() {
  const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
  const accion = acciones[Math.floor(Math.random() * acciones.length)];
  const posesion = posesiones[Math.floor(Math.random() * posesiones.length)];
  const lugar = lugares[Math.floor(Math.random() * lugares.length)];

  return `${sujeto} ${accion} ${posesion} ${lugar}.`;
}

document.getElementById("generateButton").addEventListener("click", () => {
  const excuse = generateExcuse();
  document.getElementById("excuse").textContent = excuse;
});
