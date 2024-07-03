import { gsap } from "gsap";


window.addEventListener('load', function() {
    gsap.to('.loader', {opacity: 0, duration: 5, onComplete: function() {
        document.querySelector('.loader').style.display = 'none';
        gsap.to('.content', {opacity: 1, display: 'block', duration: 1});
    }});
});