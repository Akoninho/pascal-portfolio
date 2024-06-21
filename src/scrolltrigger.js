import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Flip } from "gsap/Flip";
import { Observer } from "gsap/Observer";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tl = gsap.timeline( { 
   
  scrollTrigger: {
    trigger: ".canvas",
    scrub: true,
    markers: true
    // toggleActions: "play reverse play reverse"
  }
  
});

tl.from('.canvas', {opacity: 0, y: "6rem", duration: 1 });
tl.gsap.from("#main", {opacity: 0, scale: 0.8, duration: 2});
  // gsap.from('.canvas', {opacity: 0, y: "6rem", duration: 1 });
  // gsap.from("#main", {opacity: 0, scale: 0.8, duration: 2});

  

// const images = gsap.utils.toArray(".image-slider:not(:first-child)")
// const number = gsap.utils.toArray("#counter:not(:first-child)")


// gsap.set(number, {yPercent:101})

// const allPhotos = gsap.utils.toArray(".desktopPhoto")

// document.addEventListener("DOMContentLoaded", function() {
//   let imageSections = document.querySelectorAll("#image");
//   let number = document.getElementById("increment-number");

//   let options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5
//   };

//   let observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               let index = Array.from(imageSections).indexOf(entry.target) + 1;
//               number.innerText = String(index).padStart(2, '0');
//           }
//       });
//   }, options);

//   imageSections.forEach(imageSection => {
//       observer.observe(imageSection);
//   });
// });

// $('#increment-number').waypoint(function() {
//   increment(1, 2);
// }, {offset: '75%'});

// function increment(elem) {
//   var currVal = parseInt(document.getElementById(elem).innerHTML, 10);

//   let image_section = document.querySelectorAll("#{elem}")
//   var number = document.getElementById("increment-number")

//   let finalVal = image_section.length
//   if (currVal < finalVal) {
//     currVal++;
//     document.getElementById(elem).innerHTML = currVal;

//     setTimeout(function() {
//       increment(elem, finalVal);
//     }, 40)
//   }
// };

gsap.utils.toArray(".container").forEach((container, i) => {
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    pin: true,
    pinSpacing: false,
    // snap: 1,
  });
  gsap.from(container.children, {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: container,
      start: "top center",
      end: "top top",
      toggleActions: "play none reverse reset",
    },
  });
});