"use strict";

const dataSection = document.querySelector(".users-data");
const displayBtn = document.querySelector(".display-btn");
const clearBtn = document.querySelector(".clear-btn");

const ppic =
  "https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg";

const usersData = [
  { name: "Muhammad", age: 23, degree: true },
  { name: "Ayo", age: 25, degree: false },
  { name: "Uchenna", age: 23, degree: true },
  { name: "Musa", age: 25, degree: false },
];

function createUserCard(data) {
  data.forEach((element) => {
    const article = document.createElement("article");
    article.classList.add("user");
    const userName = document.createElement("h2");
    userName.textContent = `name: ${element.name}`;
    const userImage = document.createElement("img");
    userImage.src = ppic;
    userImage.alt = "user image";
    // userImage.classList.add('user-image')
    const age = document.createElement("p");
    age.textContent = `age: ${element.age}`;
    const hasDegree = document.createElement("p");
    hasDegree.textContent = `Education: ${element.degree ? "Graduate" : "none"}`;

    article.appendChild(userImage);
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
