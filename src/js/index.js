'use strict'
//Carrusel
const d = document;
const grande = d.querySelector('.grande')
const punto = d.querySelectorAll('.punto')

punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener('click', ()=>{
        let posicion = i
        let operacion = posicion * -33.4
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach((cadaPunto, i) =>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})
// Video
const video = document.querySelector(".vid")
const btnPlay = document.querySelector(".play")
const btnReplay = document.querySelector(".replay");
const btnVolume = document.querySelector(".volume");

let inicio = ()=>{
    btnPlay.addEventListener("click" ,play)
    // btnReplay.addEventListener("onclick", replay);
    // btnVolume.addEventListener("onclick", volume);
}
function play(){
    video.play()
}
// function replay(){

// }
// function volume(){

// }
inicio();