// let answer = [0];
// let question = ["what is your name", " what is your phone", " how old are you", "how are you"];
// let i = 0;
// while (i < question.length) {
//   answer[i] = prompt(question[i]);
//   i++;
// }
// console.log(answer);

// let a = 9;
// let sum = 0;

// for (let i = 0; i <= a; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let a = 9;
// let sum = 0;

// for (let i = 0; i <= a; i++) {
//   if (i % 2 == 1) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let a = 18;
// let sum = 0;

// for (let i = 0; i <= a; i++) {
//   if (i % 5 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "http://uzmovi.com/");
// link.textContent = "";

// Elemets
const elForm = document.querySelector("form");
const elInput = document.querySelector("input");
const elSelect = document.querySelector("input");
const elHeading = document.querySelector("input");

// VARIABLES
let rub = 128.29;
let usd = 11516.89;
let eur = 12554.27;

// functions
function eventSelect() {
  switch (elSelect.value) {
    case "usa":
      course = usa;
      return;

    case "eur":
      course = eur;
      return;

    case "rub":
      course = rub;
      return;

    default:
      return;
  }
}

function eventForm(e) {
  e.preventDefault();

  if (!course) {
    elHeading.textContent = "valyuta turini tanlang";
    return;
  }
  elHeading.textContent = `${(+elInput.value / course).toFixed(2)} ${elSelect.valute}`;
}

// events
elSelect.addEventListener("change", eventSelect);

elForm.addEventListener("submit", eventForm);
