'use strict'
/* Menu hamburguesa */
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__items");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__items_visible");
});


/* ---------------------Tabs--------------------------- */
const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

//Recorremos todos los li
li.forEach( (cadaLi, i)=>{
    //Asignamos un clic a cada li
    li[i].addEventListener('click', ()=>{
        //Recorremos todo los .li
        li.forEach( (cadaLi, i)=>{
            //Quitamos la clase activo de cada li y bloque
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })
        //En el li y bloque que hicimos click le añadimos la clase activo
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
});

/*--------------------------- Carrousel-------------------*/
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');
//Recogemos todos los puntos
punto.forEach((cadaPunto, i) =>{
    // Asignamos un click a cada punto
    punto[i].addEventListener('click', () =>{
        //Guardar la posicion de ese punto
        let posicion = i;
        //Calculando el espacio que debe desplazarse el grande
        let operacion = posicion * -50
        //Movemos el grande
        grande.style.transform = `translateX(${operacion}%)`
        //Recorremos todos los puntos
        punto.forEach((cadaPunto, i) => {
            //Quitamos la clase activo a todos los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho click
        punto[i].classList.add('activo')
    })
})

