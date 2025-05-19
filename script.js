"use strict";

const main = document.querySelector("main");
const loader = document.querySelector(".loader");
const random = Math.floor(Math.random() * 5);
console.log(random);

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

backgroundChanger();
removeLoader();
