const container =
document.getElementById(
"confetti-container"
);

const colors = [

"#ff66c4",
"#ffd93d",
"#6bcB77",
"#4d96ff",
"#ff8fab",
"#ff7b00"

];

/* 🎉 CONFETTI */

function launchConfetti(){

/* 🎉 PAPELITOS */

for(let i = 0; i < 22; i++){

const confetti =
document.createElement("div");

confetti.classList.add(
"confetti"
);

const color =
colors[
Math.floor(
Math.random() * colors.length
)
];

confetti.style.background =
color;

const x =
(Math.random() * 350) + 50;

const y =
(Math.random() * 250) - 140;

confetti.style.setProperty(
"--x",
`${x}px`
);

confetti.style.setProperty(
"--y",
`${y}px`
);

confetti.style.animationDuration =
`${2 + Math.random() * 2}s`;

container.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},4000);

}

/* 🎊 SERPENTINAS */

for(let i = 0; i < 10; i++){

const streamer =
document.createElement("div");

streamer.classList.add(
"streamer"
);

const color =
colors[
Math.floor(
Math.random() * colors.length
)
];

streamer.style.color =
color;

const x =
(Math.random() * 320) + 80;

const y =
(Math.random() * 220) - 120;

streamer.style.setProperty(
"--x",
`${x}px`
);

streamer.style.setProperty(
"--y",
`${y}px`
);

streamer.style.animationDuration =
`${2.5 + Math.random() * 2}s`;

container.appendChild(
streamer
);

setTimeout(()=>{

streamer.remove();

},4500);

}

}

/* ✨ CONTINUO */

setInterval(()=>{

launchConfetti();

},700);

/* 🕯️ APAGAR VELA */

function blowCandle(){

const flame =
document.getElementById(
'flame'
);

const page =
document.querySelector(
'.page'
);

/* 🔥 apagar */

flame.classList.add(
'flame-out'
);

/* ✨ fade */

setTimeout(()=>{

page.classList.add(
'fade-out'
);

},500);

/* ➡️ página 2 */

setTimeout(()=>{

window.location.href =
"page2.html";

},1600);

}

/* 🔄 REINICIAR */

window.addEventListener(
"pageshow",
function(event){

if(event.persisted){

window.location.reload();

}

});