/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let id_who = "excuse_who";
let id_action = "excuse_action";
let id_what = "excuse_what";
let id_when = "excuse_when";

let id_btn_who = "btn_who";
let id_btn_action = "btn_action";
let id_btn_what = "btn_what";
let id_btn_when = "btn_when";

const RandomNumber = numberItems => {
  let random = Math.floor(Math.random() * numberItems);
  return random;
};

window.onload = function() {
  getRandomWords(who, id_who);
  getRandomWords(action, id_action);
  getRandomWords(what, id_what);
  getRandomWords(when, id_when);
};

const getRandomWords = (part, excuse_id) => {
  let Random = part[RandomNumber(part.length)];
  document.getElementById(excuse_id).innerHTML = Random;
};

const addEventonClick = (part, id_btn, id_part) => {
  document.getElementById(id_btn).addEventListener("click", function() {
    getRandomWords(part, id_part);
  });
};

addEventonClick(who, id_btn_who, id_who);
addEventonClick(action, id_btn_action, id_action);
addEventonClick(what, id_btn_what, id_what);
addEventonClick(when, id_btn_when, id_when);
