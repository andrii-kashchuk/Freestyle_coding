/*setInterval(clock, 1000);*/
setInterval(hours, 1000);
setInterval(mins, 1000);
setInterval(secs, 1000);
setInterval(todayIs, 1000);

// clock in one window
/*function clock() {
    let d = new Date();
    document.getElementById('watch').innerHTML =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}*/
// --- end


// clock in different windows, one for hour, one for minutes and one for seconds
function hours() {
    let h = new Date();
    h.getHours();
    if (h.getHours() < 10) {                            // make two numbers for 01, 02, 03, 04, 05, 06, 07, 08, 09
        return document.getElementById('hour').innerHTML = "0" + h.getHours();
    } else {
        return document.getElementById('hour').innerHTML =
            h.getHours();
    }
}

function mins() {
    let m = new Date();
    m.getMinutes();
    if (m.getMinutes() < 10) {
        return document.getElementById('min').innerHTML = "0" + m.getMinutes();
    } else {
        return document.getElementById('min').innerHTML =
            m.getMinutes();
    }
}

function secs() {
    let d = new Date();
    d.getSeconds();
    if (d.getSeconds() < 10) {
        return document.getElementById('sec').innerHTML = "0" + d.getSeconds();
    } else {
        return document.getElementById('sec').innerHTML =
            d.getSeconds();
    }
}


// day of the week
let today = new Date().getDay();
let currentDay;

function todayIs() {
    if (today === 0) {
        currentDay = "Неділя";
    } else if (today === 1) {
        currentDay = "Понеділок";
    } else if (today === 2) {
        currentDay = "Вівторок";
    } else if (today === 3) {
        currentDay = "Середа";
    } else if (today === 4) {
        currentDay = "Четвер";
    } else if (today === 5) {
        currentDay = "П'ятниця";
    } else if (today === 6) {
        currentDay = "Субота";
    }

    document.getElementById('day').innerHTML = currentDay;
}
// --- end








