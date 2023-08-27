//Efecto del menu hamburguesa
document.querySelector(".bars").addEventListener("click", animateBars);

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer")
let menuResponsive = document.querySelector(".enlaces-responsive");

function animateBars(){

    line1.classList.toggle("activeline1");
    line2.classList.toggle("activeline2");
    line3.classList.toggle("activeline3");

    menuResponsive.classList.toggle("enlaces-responsive_animation");
    menuResponsive.addEventListener("click", quitarMenu);
    main.addEventListener("click", quitarMenu);
    footer.addEventListener("click", quitarMenu);
}


function quitarMenu(){
    line1.classList.remove("activeline1");
    line2.classList.remove("activeline2");
    line3.classList.remove("activeline3");

    menuResponsive.classList.remove("enlaces-responsive_animation");
}


//libreria para hacer el efecto maquina de escrbir
const typed = new Typed('.typed', {
    strings: ['Karate', 'KickBoxing'],

    typeSpeed:75,
    backSpeed:75,
    startDelay: 400,
    backDelay:500,
    loop: true

});







