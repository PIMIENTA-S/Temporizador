const tWork = document.getElementById('work');
const tBreak = document.getElementById('break');

const tiempoTrabajo = 25;
let tiempoDescanso = 5;

let segundos = "00"

window.onload = () => {
    document.getElementById('minutos').innerHTML = tiempoTrabajo;
    document.getElementById('segundos').innerHTML = segundos;

}

const iniciar = document.getElementById('start')
let estado = 1
let intervalo;
let pause = false;

iniciar.addEventListener('click', () => {
    if (estado === 1){

        iniciar.textContent = "pause";
        tWork.classList.add('activo');
        
        if (!pause){
            segundos = 59;
            trabajoPasado = tiempoTrabajo - 1;
            descansoPasado = tiempoDescanso - 1;
        }


        let cambio = 0;

        function cronometro(){
            document.getElementById('minutos').innerHTML = trabajoPasado;
            document.getElementById('segundos').innerHTML = segundos;

            segundos -= 1

            if (segundos === 0){
                trabajoPasado -= 1;
                segundos = 59;
                if (trabajoPasado === -1){
                    if (cambio % 2 === 0){
                        trabajoPasado = tiempoDescanso;
                        cambio += 1

                        tWork.classList.remove('activo');
                        tBreak.classList.add('activo')

                    } else {
                        trabajoPasado = tiempoTrabajo;
                        cambio += 1

                        tBreak.classList.remove('activo');
                        tWork.classList.add('activo')

                    }
                }
            }

        }

        intervalo = setInterval(cronometro, 1000)
        estado = 2
        pause = false;
    } else {
        iniciar.textContent = "start";
        clearInterval(intervalo);
        estado = 1
        pause = true
    }
})

const resetear = document.getElementById('reset');
resetear.addEventListener('click', () => {
    event.preventDefault();
    clearInterval(intervalo);
    document.getElementById('minutos').innerHTML = tiempoTrabajo;
    document.getElementById('segundos').innerHTML = "00";
    iniciar.textContent = "start";
    estado = 1;
    trabajoPasado = tiempoTrabajo;
    descansoPasado = tiempoDescanso;
    segundos = 59;
    tWork.classList.remove('activo');
    tBreak.classList.remove('activo');
})