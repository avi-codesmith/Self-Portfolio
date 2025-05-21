"use strict";

const main = document.querySelector("main");
const loader = document.querySelector(".loader");
const random = Math.floor(Math.random() * 5);
const typed = new Typed(".type-writter", {
  strings: ["Developer", "New Bie", "Programmer", "Student", "Codesmith"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

const backgroundChanger = () => {
  main.style.background = `url("images/${random}.jpg")`;
  main.style.backgroundRepeat = "no-repeat";
  main.style.backgroundSize = "cover";
};

const removeLoader = () => {
  setTimeout(() => {
    loader.style.opacity = "0";
  }, 1000);
};

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  const randomText = Math.floor(Math.random() * 1);
  if (randomText === 0) {
    trail.innerText = "⚫";
  } else if (randomText === 1) {
    trail.innerText = "⚪️";
    trail.innerText = "🟠";
  } else if (randomText === 2) {
  }
  trail.className = "trail";
  document.body.appendChild(trail);

  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;

  setTimeout(() => {
    trail.remove();
  }, 500);
});

backgroundChanger();
removeLoader();
