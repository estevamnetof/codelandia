// Type
var typed = new Typed('#desc', {
    strings: ["O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."],
    typeSpeed: 30,
    showCursor: false
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.item', { delay: 200 });
ScrollReveal().reveal('.date', { delay: 400 });
ScrollReveal().reveal('.title', { delay: 500 });
ScrollReveal().reveal('.description', { delay: 600 });