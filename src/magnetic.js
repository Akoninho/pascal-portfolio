import { gsap } from "gsap";


// Select the button element from the document
const logo = document.querySelector('.logo');

// Get the button's bounding rectangle dimensions and position
let boundingRect = logo.getBoundingClientRect();

// Add an event listener to the window to update the bounding rectangle dimensions
// when the window is resized
window.addEventListener('resize', () => {
  boundingRect = logo.getBoundingClientRect();
});

// Add an event listener for mouse movement over the button
logo.addEventListener('mousemove', (e) => {
  // Calculate mouse position relative to the button
  const mousePosX = e.x - boundingRect.left; // X position
  const mousePosY = e.y - boundingRect.top;  // Y position
  
  // Use GSAP (GreenSock Animation Platform) to animate the button
  // This creates a 'magnetic' effect where the button moves towards the mouse
  gsap.to(logo, {
    x: (mousePosX - boundingRect.width / 2) * 0.1, // Move horizontally towards mouse
    y: (mousePosY - boundingRect.height / 2) * 0.4, // Move vertically towards mouse
    duration: 0.8, // Duration of the animation
    ease: 'power3.out', // Easing function for smooth animation
  });
});

// Add an event listener for when the mouse leaves the button area
logo.addEventListener('mouseleave', () => {
  // Animate the button back to its original position
  gsap.to(logo, {
    x: 0, // Reset horizontal position
    y: 0, // Reset vertical position
    duration: 0.8, // Duration of the animation
    ease: 'elastic.out(1,0.3)' // Easing function for a 'springy' return
  });
});