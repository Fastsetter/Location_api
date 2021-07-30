const box = document.querySelector('.temp');

const navbar = document.querySelector('.navbar');

const second_pge = document.querySelector('.second_page');


const rcontainer = document.querySelector('.rightContainer');
const body = document.querySelector('body');
body.style.height = (screen.height);


const tl = new TimelineMax();


const curve = document.querySelector('.curve');
const circle=document.querySelector('.circle');

tl.fromTo(navbar, 1.5, { height: "0%" }, { height: "8%", ease: Power2.easeInOut });


tl.fromTo(box, 1.5, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut });

tl.fromTo(curve, 1.3, { y: "-200%" }, { y: "0%" });




