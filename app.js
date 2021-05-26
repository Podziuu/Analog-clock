setInterval(setClock, 1000);


const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');

function setClock() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;
    console.log(seconds, minutes, hours)
    setRotation(secondsHand, seconds);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);
}


function setRotation(element, rotationRate) {
    element.style.setProperty('--rotation', rotationRate * 360);
}

setClock();