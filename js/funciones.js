let ubicacionPrincipal = window.pageYOffset; //0
AOS.init();

window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset; //180
    if (ubicacionPrincipal >= desplazamientoActual) { //200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "100px";
    }
    ubicacionPrincipal = desplazamientoActual; //200
})



let linkHeader = document.querySelectorAll(".link-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguesa")[0].addEventListener("click", function() {
    if (semaforo) {
        document.querySelectorAll(".hamburguesa")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguesa")[0].style.color = "#fff";
        semaforo = true;
    }


    linkHeader.classList.toggle
})