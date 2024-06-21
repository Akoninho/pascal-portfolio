// import { gsap } from "gsap";

// const circles = document.querySelector(".circle");
// const image = document.querySelectorAll("#image");

// const mouse = {x: 0, y: 0};
// const previousMouse = {x: 0, y: 0};
// const circle = {x: 0, y: 0};

// let currentScale = 0; // Track current scale value
// let currentAngle = 0; // Track current angle value

// window.addEventListener("mousemove", (e) => {
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

// const speed = 0.17;

// const tick = () => {
//      // MOVE
//     // Calculate circle movement based on mouse position and smoothing
//     circle.x += (mouse.x - circle.x) * speed;
//     circle.y += (mouse.y - circle.y) * speed;
//     // Create a transformation string for cursor translation
//     const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

//     // SQUEEZE
//     // 1. Calculate the change in mouse position (deltaMouse)
//     const deltaMouseX = mouse.x - previousMouse.x;
//     const deltaMouseY = mouse.y - previousMouse.y;
//     // Update previous mouse position for the next frame
//     previousMouse.x = mouse.x;
//     previousMouse.y = mouse.y;
//     // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
//     const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
//     // 3. Convert mouse velocity to a value in the range [0, 0.5]
//     const scaleValue = (mouseVelocity / 150) * 0.5;
//     // 4. Smoothly update the current scale
//     currentScale += (scaleValue - currentScale) * speed;
//     // 5. Create a transformation string for scaling
//     const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

//     // ROTATE
//     // 1. Calculate the angle using the atan2 function
//     const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
//     // 2. Check for a threshold to reduce shakiness at low mouse velocity
//     if (mouseVelocity > 20) {
//         currentAngle = angle;
//     }
//     // 3. Create a transformation string for rotation
//     const rotateTransform = `rotate(${currentAngle}deg)`;

//     // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
//     circles.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

//     // Request the next frame to continue the animation
//     window.requestAnimationFrame(tick);
// }

// tick();