let arrX = [];
let arrY = [];
let db = [];
let minX = 825;
let maxX = 1094;
let midX = minX+(maxX-minX)/2;
let minY = 241;
let maxY = 473;
let midY = minY+(maxY-minY)/2;
let validCredentials;
let hide = `display:none;`;
let show = `display:block;`;
let element = document.querySelector(".main-div");
let accessCode = document.querySelector(".accesscode");
let userName = document.querySelector(".username");
let grantedAlert = document.querySelector(".access-granted");
let deniedAlert = document.querySelector(".access-denied");

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
        console.log(validCredentials);
    } else {
        validCredentials = false;
        console.log(validCredentials);
    }
}



function update(){
    if (validCredentials==true){
        element.style.display = 'none';
        deniedAlert.style.display = 'none';
        grantedAlert.style.display = 'block';
        console.log('granted');
    } else if(validCredentials==false){
        element.style.display = 'none';
        deniedAlert.style.display = 'block';
        grantedAlert.style.display = 'none';
        console.log('denied');
    }

}

