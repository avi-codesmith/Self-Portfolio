"use strict";

const bubbles = document.querySelectorAll(".bubble");

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
      duration: 4 + Math.random() * 2, // 4 to 7 sec
      delay: Math.random() * 3, // 0 to 3 sec delay
      repeat: -1,
      ease: "sine.inOut",
    }
  );
});
