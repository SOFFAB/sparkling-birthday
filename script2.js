/* ✨ PAGE 2 READY */

console.log("Page 2 loaded");

/* ✨ GENERAR MÁS DESTELLOS */

const sparklesContainer =
document.querySelector(
'.sparkles'
);

for(let i = 0; i < 45; i++){

const sparkle =
document.createElement('div');

sparkle.classList.add(
'sparkle'
);

sparkle.style.top =
Math.random() * 100 + '%';

sparkle.style.left =
Math.random() * 100 + '%';

const size =
Math.random() * 3 + 1;

sparkle.style.width =
size + 'px';

sparkle.style.height =
size + 'px';

sparkle.style.animationDuration =
(Math.random() * 3 + 2) + 's';

sparkle.style.animationDelay =
(Math.random() * 4) + 's';

sparklesContainer.appendChild(
sparkle
);

}

/* ✨ BURBUJAS */

const fizzContainer =
document.createElement('div');

fizzContainer.classList.add(
'fizz-bg'
);

document.body.appendChild(
fizzContainer
);

for(let i = 0; i < 24; i++){

const bubble =
document.createElement('div');

bubble.classList.add(
'fizz-bubble'
);

const size =
Math.random() * 26 + 8;

bubble.style.width =
size + 'px';

bubble.style.height =
size + 'px';

bubble.style.left =
Math.random() * 100 + 'vw';

bubble.style.animationDuration =
(Math.random() * 7 + 7) + 's';

bubble.style.animationDelay =
(Math.random() * 8) + 's';

bubble.style.opacity =
Math.random() * .45 + .18;

fizzContainer.appendChild(
bubble
);

}

/* ✨ REGALOS */

const bottleCoupons = {

1:'Coca-Cola + botana',

2:'Masaje en casa',

3:'Salida al cine',

4:'Manicure en casa',

5:'Salida por un elote',

6:'Pedicure en casa'

};

let currentBottle = null;

/* ✨ ABRIR BOTELLA */

function openBottle(number){

if(

localStorage.getItem(
'bottle-' + number
)==='used'

){

return;

}

currentBottle = number;

const modal =
document.getElementById(
'bottleModal'
);

modal.classList.add(
'show'
);

setTimeout(()=>{

modal.classList.add(
'show-content'
);

},2000);

}

/* ✨ CERRAR MODAL */

function closeBottleModal(){

const modal =
document.getElementById(
'bottleModal'
);

const bottle =
document.getElementById(
'mainBottle'
);

const opener =
document.getElementById(
'opener'
);

const fizz =
document.getElementById(
'fizz'
);

const text =
document.getElementById(
'openText'
);

const choice =
document.getElementById(
'couponChoice'
);

modal.classList.remove(
'show-content'
);

modal.classList.remove(
'show'
);

choice.classList.remove(
'show'
);

bottle.src =
'bottle.png';

opener.classList.remove(
'opening'
);

fizz.classList.remove(
'show'
);

text.innerHTML =
'Destapa tu Coca-Cola';

}

/* ✨ DESTAPAR */

function openCoke(){

const bottle =
document.getElementById(
'mainBottle'
);

const opener =
document.getElementById(
'opener'
);

const fizz =
document.getElementById(
'fizz'
);

const text =
document.getElementById(
'openText'
);

opener.classList.remove(
'opening'
);

void opener.offsetWidth;

opener.classList.add(
'opening'
);

fizz.classList.add(
'show'
);

text.innerHTML =
'Abriendo tu Coca-Cola...';

setTimeout(()=>{

bottle.src =
'bottle-open.png';

text.innerHTML =
'Tu regalo está listo';

setTimeout(()=>{

showCouponChoice();

},1200);

},500);

}

/* ✨ CUPÓN */

function showCouponChoice(){

const choice =
document.getElementById(
'couponChoice'
);

const couponImage =
document.getElementById(
'couponImage'
);

couponImage.src =
'coupon' + currentBottle + '.png';

choice.classList.add(
'show'
);

}

/* ✨ CANCELAR */

function cancelCoupon(){

closeBottleModal();

}

/* ✨ REDIMIR BOTELLA */

function confirmRedeem(){

localStorage.setItem(
'bottle-' + currentBottle,
'used'
);

const cap =
document.querySelector(
'.cap-hitbox.cap' + currentBottle
);

if(cap){

cap.classList.add(
'used'
);

}

closeBottleModal();

/* ✨ WHATSAPP */

const phone =
'525512212268';

const message =

`pssssst 🥤

Una Coca-Cola acaba de ser destapada…
y eso solo puede significar una cosa 🤭

Cupón activado:

✨ ${bottleCoupons[currentBottle]} ✨

Estoy lista para recibir mi premio

📅 Fecha solicitada:
🕒 Hora solicitada:`;

window.location.href =

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

}

/* ✨ RECUPERAR TAPAS */

window.addEventListener(
'load',
()=>{

for(let i=1;i<=6;i++){

if(

localStorage.getItem(
'bottle-'+i
)==='used'

){

const cap =
document.querySelector(
'.cap-hitbox.cap' + i
);

if(cap){

cap.classList.add(
'used'
);

}

}

}

});

/* ✨ MÁQUINA */

let machineRedeemed =

parseInt(

localStorage.getItem(
'machineRedeemed'
)

) || 0;

/* ✨ ABRIR */

function openMachine(){

const modal =
document.getElementById(
'machineModal'
);

updateMachineImage();

modal.classList.add(
'show'
);

setTimeout(()=>{

modal.classList.add(
'show-content'
);

},2000);

}

/* ✨ CERRAR */

function closeMachine(){

const modal =
document.getElementById(
'machineModal'
);

modal.classList.remove(
'show-content'
);

modal.classList.remove(
'show'
);

}

/* ✨ ACTUALIZAR */

function updateMachineImage(){

const machine =
document.getElementById(
'machineImage'
);

if(machine){

machine.src =

'machine-' +

(5 - machineRedeemed)

+

'.png';

}

/* ✨ BOTONES */

for(let i=1;i<=5;i++){

const btn =
document.querySelector(
'.machine-btn-' + i
);

if(btn){

btn.classList.add(
'disabled'
);

}

}

const nextBtn =
document.querySelector(

'.machine-btn-' +

(machineRedeemed + 1)

);

if(nextBtn){

nextBtn.classList.remove(
'disabled'
);

}

}

/* ✨ USAR LATA */

function useMachineCan(number){

if(number <= machineRedeemed){

return;

}

/* ✨ IMAGEN */

const machine =
document.getElementById(
'machineImage'
);

/* ✨ MOSTRAR DROP */

machine.src =

'machine-drop-' +

number +

'.png';

/* ✨ ESPERAR */

setTimeout(()=>{

/* ✨ ACTUALIZAR VISUAL */

machine.src =

'machine-' +

(5 - machineRedeemed - 1)

+

'.png';

/* ✨ MOSTRAR MODAL */

const choice =
document.getElementById(
'machineChoice'
);

choice.classList.add(
'show'
);

},1800);

}

/* ✨ CONTADOR */

function updateMachineCounter(){

const counter =
document.getElementById(
'machineCounter'
);

counter.innerHTML =

'Redimidos ' +

machineRedeemed +

'/5';

}

/* ✨ CANCELAR */

function cancelMachineCan(){

const choice =
document.getElementById(
'machineChoice'
);

choice.classList.remove(
'show'
);

}

/* ✨ REDIMIR LATA */

function redeemMachineCan(){

/* ✨ CERRAR */

const choice =
document.getElementById(
'machineChoice'
);

choice.classList.remove(
'show'
);

/* ✨ SUMAR */

machineRedeemed++;

localStorage.setItem(
'machineRedeemed',
machineRedeemed
);

/* ✨ ACTUALIZAR */

updateMachineCounter();
updateMachineImage();

/* ✨ WHATSAPP */

const phone =
'525512212268';

const message =

`pssssst 🥤

Una Coca-Cola de la máquina fue redimida 🤭

✨ Coca-Cola número ${machineRedeemed}/5 ✨

Estoy lista para recibir mi Coca-Cola

📅 Fecha solicitada:
🕒 Hora solicitada:`;

window.location.href =

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

}

/* ✨ INICIAR */

updateMachineImage();
updateMachineCounter();