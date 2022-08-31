let waitTill = 0;
let timer = document.querySelector('.timer');
let currentLight = 'red';
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
timer.innerHTML = waitTill;
red.style.backgroundColor = 'red';


let stopL = setInterval(stop,1000);
let haltL;
let goL;


function stop(){
    console.log(waitTill);
    if(waitTill!=0){
    timer.innerHTML = --waitTill;
    } else {
        clearInterval(stopL)
        red.style.backgroundColor = 'red';
        yellow.style.backgroundColor = 'black';
        green.style.backgroundColor = 'black';
        currentLight = 'red'
        waitTill = 11;
        haltL = setInterval(halt,1000);
    }
}
function halt(){
    console.log(waitTill);
    if(waitTill!=0){
    timer.innerHTML = --waitTill;
    } else {
        clearInterval(haltL)
        red.style.backgroundColor = 'black';
        yellow.style.backgroundColor = 'yellow';
        green.style.backgroundColor = 'black';
        currentLight = 'yellow'
        waitTill = 6;
        goL = setInterval(go,1000);
    }
}
function go(){
    console.log(waitTill);
    if(waitTill!=0){
    timer.innerHTML = --waitTill;
    } else {
        clearInterval(goL)
        red.style.backgroundColor = 'black';
        yellow.style.backgroundColor = 'black';
        green.style.backgroundColor = 'green';
        currentLight = 'green'
        waitTill = 11;
        stopL = setInterval(stop,1000);
    }
}

