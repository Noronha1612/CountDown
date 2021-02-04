let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;

let days = 365 - Math.floor(diff / oneDay);
let hours = 23 - now.getHours();
let minutes = 59 - now.getMinutes();
let seconds = 60 - now.getSeconds();

const htmlDays = document.querySelector('#days');
const htmlHours = document.querySelector('#hours');
const htmlMinutes = document.querySelector('#minutes');
const htmlSeconds = document.querySelector('#seconds');

const interval = setInterval(() => {
    updateClock();
}, 1000);

const updateClock = () => {
    if ( days === 0 && hours === 0 && minutes === 0 && seconds === 1 ) {
        seconds = 0;
        clearInterval(interval);
        setUpdatedClock();

        return;
    }

    if ( seconds === 0 ) {
        seconds = 59;
        if( minutes == 0 ) {
            minutes = 59;
            if ( hours == 0 ) {
                hours = 23;
                days--;
            } else hours--;
        } else minutes--;
    } else seconds--;

    setUpdatedClock();
}

const setUpdatedClock = () => {
    htmlDays.innerHTML = formatNumber(days);
    htmlHours.innerHTML = formatNumber(hours);
    htmlMinutes.innerHTML = formatNumber(minutes);
    htmlSeconds.innerHTML = formatNumber(seconds);
}

const formatNumber = (number) => {
    const numberString = number.toString();

    return numberString.length == 1 ? `0${numberString}` : numberString;
}