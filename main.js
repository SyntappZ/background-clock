function updateClock(){


let output = document.querySelector('.dateBox');


let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
let hours = d.getHours();
let mins = d.getMinutes();
let sec = d.getSeconds();

if(month === 0){
    month = 'jan';
}
if(month === 1){
    month = 'feb'
}
if(month === 2){
    month = 'mar';
}
if(month === 3){
    month = 'apr';
}
if(month === 4){
    month = 'may';
}
if(month === 5){
    month = 'jun';
}
if(month === 6){
    month = 'jul';
}
if(month === 7){
    month = 'aug';
}
if(month === 8){
    month = 'sep';
}
if(month === 9){
    month = 'oct';
}
if(month === 10){
    month = 'nov';
}
if(month === 11){
    month = 'dec';
}

if(sec < 10){
    sec = '0' + sec;
}
if(mins < 10){
    mins = '0' + mins;
}

let dCycle = document.getElementById('dayCycle');

if(hours > 0 && hours < 7){
    document.body.style.backgroundImage = "url('img/night.jpg')";
    dCycle.innerHTML = "it's night time!";
}
if(hours > 7 && hours < 12){
    document.body.style.backgroundImage = "url('img/dawn.jpg')";
    dCycle.innerHTML = "it's morning!";
}
if(hours > 12 && hours < 18){
    document.body.style.backgroundImage = "url('img/midday.jpg')";
    dCycle.innerHTML = "it's afternoon!";
}
if(hours > 18 && hours < 0){
    document.body.style.backgroundImage = "url('img/dusk.jpg')";
    dCycle.innerHTML = "it's dusk";
}

let todaysDate =  hours + ':' + mins + ':' + sec + '<br> ' + day + ' ' + month + ' ' + year;


output.innerHTML = todaysDate;
setTimeout(updateClock, 1000);
}
updateClock();