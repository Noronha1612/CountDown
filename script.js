const today = new Date(Date.now());

let days = 8;
let hours = 23;
let minutes = 55;
let seconds = 41;

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

    if ( seconds === 1 ) {
        seconds = 60;
        if( minutes == 1 ) {
            minutes = 60;
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