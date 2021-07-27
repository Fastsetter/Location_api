const lcontainer=document.querySelector('.leftContainer');

const navbar=document.querySelector('.navbar');

const rcontainer=document.querySelector('.rightContainer');
const body=document.querySelector('body');

const tl=new TimelineMax();


tl.fromTo(navbar,1,{height:"0%"},{height:"8%", ease:Power2.easeInOut});


tl.fromTo(lcontainer,1.5,{x:"-100%"},{x:"0%",ease:Power2.easeInOut});

tl.fromTo(rcontainer,1.4,{x:"100%"},{x:"0%",ease:Power2.easeInOut});

