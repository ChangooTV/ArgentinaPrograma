let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;        
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("streaming");
        habilidades[3].classList.add("excel");
    }

}


//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
}