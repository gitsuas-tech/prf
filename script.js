const pages=document.querySelectorAll(".page");

let currentPage=0;



window.onload=()=>{

setTimeout(()=>{

loading.style.display="none";

app.classList.remove("hidden");

createStars();

},2500);

}



function nextPage(){

pages[currentPage]
.classList.remove(
"active"
);

currentPage++;

pages[currentPage]
.classList.add(
"active"
);

}



function startJourney(){

music.play();

nextPage();

}



const birthday=
new Date(
"August 13, 2026 00:00:00"
);


setInterval(()=>{

const now=
new Date();

const gap=
birthday-now;


days.innerText=
Math.floor(
gap/
1000/
60/
60/
24
);

hours.innerText=
Math.floor(
gap/
1000/
60/
60
)%24;


minutes.innerText=
Math.floor(
gap/
1000/
60
)%60;


seconds.innerText=
Math.floor(
gap/
1000
)%60;

},1000);



function createStars(){

for(let i=0;i<100;i++){

let star=document.createElement(
"div"
);

star.className="star";

star.style.left=
Math.random()*100+"vw";

star.style.top=
Math.random()*100+"vh";

star.style.animationDuration=
Math.random()*3+2+"s";

star.style.animationDelay=
Math.random()*3+"s";

star.style.width=
Math.random()*3+1+"px";

star.style.height=
star.style.width;

document.body.appendChild(
star
);

}

}

setInterval(()=>{

let shooting=
document.createElement(
"div"
);

shooting.className=
"shooting-star";

shooting.style.left=
Math.random()*100+"vw";

shooting.style.top=
Math.random()*50+"vh";

document.body.appendChild(
shooting);

setTimeout(()=>{

shooting.remove();

},3000);

},4000);