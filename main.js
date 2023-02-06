
const rost = document.querySelector('.rost');
const varl = document.querySelector('.varl');
const avad = document.querySelector('.avad');
const erend = document.querySelector('.erend');
const vanasha = document.querySelector('.vanasha');
const titleH2 = document.querySelector('.title-personaje')
const buttonRost = document.querySelector('.button-rost');
const buttonVarl = document.querySelector('.button-varl');
const buttonAvad = document.querySelector('.button-avad');
const buttonErend = document.querySelector('.button-erend');
const buttonVanasha = document.querySelector('.button-vanasha');


buttonRost.addEventListener('click', changePersonaje.bind(this, "rost"));
buttonVarl.addEventListener('click', changePersonaje.bind(this, "varl"));
buttonAvad.addEventListener('click', changePersonaje.bind(this, "avad"));
buttonVanasha.addEventListener('click', changePersonaje.bind(this, "vanasha"))
buttonErend.addEventListener('click', changePersonaje.bind(this, "erend"))

function changePersonaje(personaje){
titleH2.innerHTML= ""
    if (personaje == "rost" ){
        rost.classList.remove('inactive');
        varl.classList.add('inactive');
        avad.classList.add('inactive');
        erend.classList.add('inactive');
        vanasha.classList.add('inactive');
    }
    else if (personaje == "varl"){
        varl.classList.remove('inactive')
        rost.classList.add('inactive');
        avad.classList.add('inactive');
        erend.classList.add('inactive');
        vanasha.classList.add('inactive');
    }
    else if (personaje == "avad"){
        avad.classList.remove('inactive');
        varl.classList.add('inactive');
        rost.classList.add('inactive');
        erend.classList.add('inactive');
        vanasha.classList.add('inactive');
    }
    else if (personaje == "erend"){
        erend.classList.remove('inactive');
        varl.classList.add('inactive');
        avad.classList.add('inactive');
        rost.classList.add('inactive');
        vanasha.classList.add('inactive');
    }
    else if (personaje == "vanasha"){
        vanasha.classList.remove('inactive');
        varl.classList.add('inactive');
        avad.classList.add('inactive');
        erend.classList.add('inactive');
        rost.classList.add('inactive');
    }
}