"use strict";

const dataSection = document.querySelector(".users-data");
const displayBtn = document.querySelector(".display-btn");
const clearBtn = document.querySelector(".clear-btn");

const usersData = [
  { name: "Muhammad", age: 23, degree: true },
  { name: "Ayo", age: 25, degree: false },
];

function createUserCard(data) {
  data.forEach((element) => {
    const article = document.createElement("article");
    article.classList.add("user");
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

function clearData() {
  dataSection.textContent = "";
}

displayBtn.addEventListener("click", () => {
  createUserCard(usersData);
});

clearBtn.addEventListener("click", () => {
  clearData();
});
