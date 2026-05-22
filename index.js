"use strict";

const secondsBox = document.querySelector(".second-space");
const minutesBox = document.querySelector(".minute-space");
const hoursBox = document.querySelector(".hour-space");
const btn = document.querySelector(".btn");

let hours;
let minutes;
let seconds;

function updateClock() {
  const now = new Date();
  hours = String(now.getHours()).padStart(2, "0");
  minutes = String(now.getMinutes()).padStart(2, "0");
  seconds = String(now.getSeconds()).padStart(2, "0");

  hoursBox.textContent = hours;
  minutesBox.textContent = minutes;
  secondsBox.textContent = seconds;
}

setTimeout(() => {
  console.log("timing tick");
}, 60000);

setInterval(updateClock, 1000);

const usersData = [
  { name: "Muhammad", age: 23, degree: true },
  { name: "Ayo", age: 25, degree: false },
];

const dataSection = document.querySelector(".users-data");
const displayBtn = document.querySelector(".display-btn");

function createUserCard(data) {
  data.forEach((element) => {
    const article = document.createElement("article");
    const userName = document.createElement("h2");
    userName.textContent = `name: ${element.name}`;
    const age = document.createElement("p");
    age.textContent = `age: ${element.age}`;
    const hasDegree = document.createElement("p");
    hasDegree.textContent = `Education level: ${element.degree ? "Graduate" : "Undergraduate"}`;

    article.appendChild(userName);
    article.appendChild(age);
    article.appendChild(hasDegree);

    dataSection.appendChild(article);
  });
}

displayBtn.addEventListener("click", () => {
  createUserCard(usersData);
});
