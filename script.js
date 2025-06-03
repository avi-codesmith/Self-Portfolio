"use strict";

const body = document.querySelector("body");
const main = document.querySelector("main");
const workDivs = document.querySelectorAll(".work-container div");
const work = document.querySelector("#work");
const loader = document.querySelector(".loader");
const random = Math.floor(Math.random() * 5);
const typed = new Typed(".type-writter", {
  strings: ["Developer", "New Bie", "Programmer", "Student", "Codesmith"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const backgroundChanger = () => {
  main.style.background = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("images/${random}.jpg")`;
  main.style.backgroundRepeat = "no-repeat";
  main.style.backgroundSize = "cover";
};

const removeLoader = () => {
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      body.classList.add("overflow");
    }, 1000);
  });
};

document.addEventListener("click", (e) => {
  const color = [
    "rgba(17, 17, 17, 0.5)",
    "rgba(2, 2, 2, 0.5)",
    "rgba(20, 20, 20, 0.5)",
  ];
  const random = Math.floor(Math.random() * color.length);
  const trail = document.createElement("div");
  trail.classList.add("trail");
  document.body.appendChild(trail);
  trail.style.backgroundColor = color[random];
  trail.style.top = `${e.clientY}px`;
  trail.style.left = `${e.clientX}px`;

  setTimeout(() => {
    trail.remove();
  }, 500);
});

const workObs = new IntersectionObserver((e) => {
  const ent = e[0];
  if (ent.isIntersecting) {
    workDivs.forEach((e) => {
      e.classList.add("center");
    });
  } else {
    workDivs.forEach((e) => {
      e.classList.remove("center");
    });
  }
});

// const navObs = new IntersectionObserver((e) => {
//   const ent = e[0];

//   if (ent.isIntersecting === true) {
//     console.log(ent);
//     header.style.position = "sticky";
//     header.style.top = "0";
//   }
// });

// navObs.observe(work);
workObs.observe(work);
backgroundChanger();
removeLoader();