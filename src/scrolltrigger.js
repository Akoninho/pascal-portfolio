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

// let timeln = gsap.timeline({
//   scrollTrigger:{
//     trigger: ".container",
//     pin: true,

//   }
// })

const tl = gsap.timeline( { 
   
  scrollTrigger: {
    trigger: ".canvas",
    scrub: true,
    markers: true
    // toggleActions: "play reverse play reverse"
  }
  
});

tl
  gsap.from('.canvas', {opacity: 0, y: "6rem", duration: 1 });
  gsap.from("#main", {opacity: 0, scale: 0.8, duration: 2});
  
  // .to('#canvas', { scale: 0, duration: 2 },
  //     2)
  // .to('.container2', { opacity: 1, duration: 2 })
  // .to('container2', { opacity: 0, duration: 2 },
  //     2);

let container = gsap.utils.toArray(".container2");

// we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
let tops = container.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

// gsap.utils.toArray(".container2").forEach((container2, i) =>{
//   ScrollTrigger.create({
//     trigger: ".container2",
//     start: "top bottom",
//     pin: true,
//     pinSpacing: false
//   });
// });




container.forEach((container2, i) => {
  ScrollTrigger.create({
    trigger: container2,
    start: () => container2.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    pinSpacing: false 
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let container2Starts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
          snapScroll = gsap.utils.snap(container2Starts, self.scroll()); // find the closest one
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
    },
    duration: 0.5
  }
});