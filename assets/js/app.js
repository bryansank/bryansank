


const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');
const images = document.querySelectorAll('.img');


punto.forEach( (point, i)=>{
    punto[i].addEventListener('click', ()=>{
        let posicion = i;
        let oper = posicion * -50;

        grande.style.transform = `translateX(${oper}%)`;

        punto.forEach((cu, i)=> {
            punto[i].classList.remove('activo');
            
        });

        // Aqui esta recorriendo JUSTO ese boton asi que le asignamos activo
        punto[i].classList.add('activo');
        
    });
})