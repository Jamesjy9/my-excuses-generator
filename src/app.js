/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = generateExcuse();
  });
  console.log("Hello James from the console!");
};

let generateExcuse = () => {
  let pronoun = ["a", "the"];
  let subject = [" daughter", " artist", " woman", " teacher"];
  let action = [" took my", " sing a", " dress a", " talked about"];
  let posesion = [" book", " nice song", " a bleu jeans", " javascript"];
  let where = [" in my bed", " on his album", " to the party", " in the class"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posesionIndex = Math.floor(Math.random() * posesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    "" +
    subject[subjIndx] +
    "" +
    action[actionIndex] +
    "" +
    posesion[posesionIndex] +
    "" +
    where[whereIndex]
  );
};
