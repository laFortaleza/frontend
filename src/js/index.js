'use strict'
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