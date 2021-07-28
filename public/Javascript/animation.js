const box=document.querySelector('.temp');

const navbar=document.querySelector('.navbar');
const latlon=document.querySelector('.latlon');

const rcontainer=document.querySelector('.rightContainer');
const body=document.querySelector('html');
body.style.height=screen.height;
const tl=new TimelineMax();


const curve=document.querySelector('.curve');


tl.fromTo(navbar,1.5,{height:"0%"},{height:"8%", ease:Power2.easeInOut});


tl.fromTo(box,1.5,{opacity:"0"},{opacity:"1",ease:Power2.easeInOut});

tl.fromTo(curve,1.3,{y:"-200%"},{y:"0%"});


tl.to(latlon,2.3,{opacity:"1"});
