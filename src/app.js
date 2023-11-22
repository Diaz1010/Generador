/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let who = ["Mi perro", "Mi Mama", "El vecino", "Mi amor"];
  let what = [
    "se enfermo",
    "se estrello",
    "lo robaron",
    "Lo raptaron",
    "Se me escapo",
    "Estropeo todo"
  ];
  let when = [
    "antes de salir de casa",
    "en la calle",
    "en el centro comercial",
    "En la fiesta del Viernes"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return who[whoIndx] + " " + what[whatIndx] + " " + when[whenIndx];
};
window.onload = function() {
  //write your code here
  document.querySelector("#la-excusa").innerHTML = generateExcuse();
};
