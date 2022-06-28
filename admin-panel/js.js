let arrX = [];
let arrY = [];
let db = [];
let minX = 825;
let maxX = 1094;
let midX = minX+(maxX-minX)/2;
let minY = 241;
let maxY = 473;
let timeleft = 5;
let midY = minY+(maxY-minY)/2;
let validCredentials;
let hide = `display:none;`;
let show = `display:block;`;
let element = document.querySelector(".main-div");
let accessCode = document.querySelector(".accesscode");
let userName = document.querySelector(".username");
let grantedAlert = document.querySelector(".access-granted");
let deniedAlert = document.querySelector(".access-denied");
let eye = document.querySelector('#toggle-password');
let timerText1 = document.querySelector('#timer-text1');
let timerText2 = document.querySelector('#timer-text2');

// Styles 
const defaultStyle = `box-shadow: none;`;
const tl = `box-shadow: -10px -10px 20px 5px rgba(255,255,255,0.2);`;
const tr = `box-shadow: 10px -10px 20px 5px rgba(255,255,255,0.2);`;
const br = `box-shadow: -10px 10px 20px 5px rgba(255,255,255,0.2);`;
const bl = `box-shadow: 10px 10px 20px 5px rgba(255,255,255,0.2);`;
const switchOff = `width:600px; height:0px;`;
//------------------------------------------------------------------




function posi(e){
    x = e.clientX;
    y = e.clientY;
        if (x<midX && y<midY){
            element.style.cssText = tl;
        }
        else if (x>midX && y<midY){
            element.style.cssText = tr;
        }
        else if (x<midX && y>midY){
            element.style.cssText = br;
        }
        else if (x>midX && y>midY){
            element.style.cssText = bl;
        } else {
            element.style.cssText = defaultStyle;
        }
}

function checkCredentials(){
    if (userName.value=="Admin" && accessCode.value == 701178){
        validCredentials = true;
    } else {
        validCredentials = false;
    }
}

function update(){
    if (validCredentials==true){
        element.style.display = 'none';
        deniedAlert.style.display = 'none';
        grantedAlert.style.display = 'block';
        let countdowntoPanel = setInterval(function(){
            if(timeleft <= 0){
              clearInterval(countdowntoPanel);
              document.getElementById("timer-text1").innerHTML = "";
              window.location.replace("panel.html");
          
            } else {
              document.getElementById("timer-text1").innerHTML = 'Redirecting in '+timeleft+'s';
            }
            timeleft -= 1;
          }, 1000);
    } else if(validCredentials==false){
        element.style.display = 'none';
        deniedAlert.style.display = 'block';
        grantedAlert.style.display = 'none';
        let countdowntoLogin = setInterval(function(){
            if(timeleft <= 0){
              clearInterval(countdowntoLogin);
              document.getElementById("timer-text2").innerHTML = "";
              window.location.replace("index.html");
          
            } else {
              document.getElementById("timer-text2").innerHTML = 'Redirecting in '+timeleft+'s';
            }
            timeleft -= 1;
          }, 1000);
    }

}

eye.addEventListener('click',function(e){
    const type = accessCode.getAttribute('type') === 'password' ? 'text' : 'password';
    accessCode.setAttribute('type',type);
    this.classList.toggle('fa-eye-slash');
})





