const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');


function lampOn () {
    lamp.src = './img/ligada.png';
}

function LampOff () {
    lamp.src = './img/desligada.png';

}

function LamBroken () {
    lamp.src = '/img/quebrada.png';

}

turnOn.addEventListener ('click', lampOn );
turnOff.addEventListener ('click', LampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ('mouseleave', LampOff);
lamp.addEventListener ('dblclick', LamBroken );





