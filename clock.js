let current_time= '23:59:50';
let [hours, minutes, seconds]= current_time.split(':').map(Number);
const clock= document.getElementById('clock');

function clockUpdate(){
    seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
    }
    if(minutes===60){
        minutes=0;
        hours++;
    }
    if(hours===24){
        hours=0;
    }
    clock.textContent = String(hours).padStart(2,'0') + ':' +
                        String(minutes).padStart(2,'0') + ':' +
                        String(seconds).padStart(2,'0')
}
clock.setContent = current_time;
setInterval(clockUpdate, 1000);
