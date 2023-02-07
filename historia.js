const contenedor1 = document.querySelector('.c1');
const info1 = document.querySelector('.info-1');
const contenedor2 = document.querySelector('.c2');
const info2 = document.querySelector('.info-2');
const contenedor3 = document.querySelector('.c3');
const info3 = document.querySelector('.info-3');
const contenedor4 = document.querySelector('.c4');
const info4 = document.querySelector('.info-4');
const contenedor5 = document.querySelector('.c5');
const info5 = document.querySelector('.info-5');
const contenedor6 = document.querySelector('.c6');
const info6 = document.querySelector('.info-6');
const contenedor7 = document.querySelector('.c7');
const info7 = document.querySelector('.info-7');
const contenedor8 = document.querySelector('.c8');
const info8 = document.querySelector('.info-8');
const contenedor9 = document.querySelector('.c9');
const info9 = document.querySelector('.info-9');


contenedor1.addEventListener('click', openFirstInfo);
contenedor2.addEventListener('click', openFirstInfo);
contenedor3.addEventListener('click', openFirstInfo);
contenedor4.addEventListener('click', openSecondInfo);
contenedor5.addEventListener('click', openSecondInfo);
contenedor6.addEventListener('click', openSecondInfo);
contenedor7.addEventListener('click', openThirdInfo);
contenedor8.addEventListener('click', openThirdInfo);
contenedor9.addEventListener('click', openThirdInfo);


function openFirstInfo(){
    info1.classList.toggle('inactive');
    info2.classList.toggle('inactive');
    info3.classList.toggle('inactive');
}
function openSecondInfo(){
    info4.classList.toggle('inactive');
    info5.classList.toggle('inactive');
    info6.classList.toggle('inactive');
}
function openThirdInfo(){
    info7.classList.toggle('inactive');
    info8.classList.toggle('inactive');
    info9.classList.toggle('inactive');
}