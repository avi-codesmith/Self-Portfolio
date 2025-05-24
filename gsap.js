"use strict";

const header = document.querySelector("nav");
const bubbles = document.querySelectorAll(".bubble");

const scroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive"),
  smooth: true,
  lerp: 0.08,
  getDirection: true,
  reloadOnContextChange: true,
});

bubbles.forEach((bubble) => {
  const randomX = Math.random() * window.innerWidth;
  bubble.style.left = `${randomX}px`;

  gsap.fromTo(
    bubble,
    {
      y: 0,
      opacity: 0,
      scale: 0.2,
    },
    {
      y: -window.innerHeight,
      opacity: 0.8,
      scale: 1,
      duration: 4 + Math.random() * 2,
      delay: 1 + Math.random() * 3,
      repeat: -1,
      ease: "sine.inOut",
    }
  );
});

gsap.from("nav", {
  x: -1000,
  duration: 1,
  delay: 1.5,
});

gsap.from(".footer ul", {
  x: 1000,
  duration: 1,
  delay: 1.5,
});

gsap.from("main", {
  opacity: 0,
  duration: 1,
  scale: 1.5,
  delay: 1,
});

gsap.from(".hero", {
  opacity: 0,
  duration: 1,
  delay: 2,
});
