import { gsap } from "gsap";

gsap.set(".circle2", {xPercent: -50, yPercent: -50});

let xSetter = gsap.quickSetter(".circle2", "x", "px") //apply it to the #id element's x property and append a "px" unit
let ySetter = gsap.quickSetter(".circle2", "y", "px") //apply it to the #id element's x property and append a "px" unit

window.addEventListener("mousemove", e => {  
  xSetter(e.x)
  ySetter(e.y)
});