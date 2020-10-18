//ANIMATIONS----------------------------------------------------------------
const logo = document.querySelector("#logo")
const intro = document.querySelector("#intro")
const navList = document.querySelector("#nav-list")
const char1 = document.querySelector("#char1")


const tl = gsap.timeline();
tl.from(logo, 1.2, {opcaity: 0, x: 30}, {opcaity: 1, x: 0},);
tl.from(navList, 1.2, {opcaity: 0, x: 30}, {opcaity: 1, x: 0},);
tl.from(intro, {opcaity:0, scale:0, duration: 1, ease:"back"})
tl.from(char1, {yPercent: 118, stagger: 0.1, duration: 0.8, ease:"back"})