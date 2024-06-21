import { gsap } from "gsap";

gsap.set(".circle", {xPercent: -50, yPercent: -50});

// let xTo = gsap.quickTo(".circle", "x", {duration: 0.6, ease: "power3"}),
//     yTo = gsap.quickTo(".circle", "y", {duration: 0.6, ease: "power3"});

let xTo = gsap.quickTo(".circle", "x", {duration: 0.6}),
    yTo = gsap.quickTo(".circle", "y", {duration: 0.6});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});