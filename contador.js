 


//CYBER 2020 - CONTADOR
if (
    document.getElementById("day") &&
    document.getElementById("hour") &&
    document.getElementById("minute") &&
    document.getElementById("second")
) {
    console.log("cronometro cyber ok");
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date("October 31, 2020 17:29:00").getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("day").innerText = Math.floor(distance / day)),
            (document.getElementById("hour").innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById("minute").innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById("second").innerText = Math.floor(
                (distance % minute) / second
            ));
                //do something later when date is reached
            if (distance < 0) {
                clearInterval(x);
                document.querySelector('.contadorCyber').classList.add('oculta');
                document.querySelector('#ofertaFlash1').classList.remove('oculta'); 
 
            /* ---------------OFERTA FLASH 1 ------------------- */
if (
    document.getElementById("hour1") &&
    document.getElementById("minute1") &&
    document.getElementById("second1")
) {
    console.log("encontrado crono flash 1");
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date("October 31, 2020 17:40:00").getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;

         /*    (document.getElementById("day1").innerText = Math.floor(distance / day)), */
            (document.getElementById("hour1").innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById("minute1").innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById("second1").innerText = Math.floor(
                (distance % minute) / second
            ));
                //do something later when date is reached
            if (distance < 0) {
                clearInterval(x);
               document.querySelector('#ofertaFlash1').classList.add('oculta'); 
            }
            
        
        }, second);
} else {
    console.log("falta cronometro flash 1");
}

           
            }
            
        
        }, second);
} else {
    console.log("No existe cronómetro");
}

