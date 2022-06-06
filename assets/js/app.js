

// for carrousel logic.
const grande = document.querySelector('.display_carrousel');
const punto = document.querySelectorAll('.point_display');
const images = document.querySelectorAll('.img_carrousel');


punto.forEach( (point, i)=>{
    punto[i].addEventListener('click', ()=>{
        let posicion = i;
        let oper = posicion * -50;

        grande.style.transform = `translateX(${oper}%)`;

        punto.forEach((cu, i)=> {
            punto[i].classList.remove('active_point');
            
        });

        // Aqui esta recorriendo JUSTO ese boton asi que le asignamos activo
        punto[i].classList.add('active_point');
        
    });
})
//