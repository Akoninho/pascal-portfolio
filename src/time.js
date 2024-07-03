import { gsap } from "gsap";


document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');


    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            gsap.quickTo(circle, {
                duration: 0.2,
                scale: 8
            });
        });

        img.addEventListener('mouseleave', () => {
            gsap.quickTo(circle, {
                duration: 0.2,
                scale: 1
            });
        });
    });
});