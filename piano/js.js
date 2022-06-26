let indx;
let div = document.querySelector('.main');
let showKey = document.querySelector('.showKey');
let keyButton = document.querySelector('.keyDisplay a');
const keyList = ['a','w', 's','e', 'd','f','t', 'g','y', 'h','u','j'];
const note =    ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b'];
const keyDivs = ['.wk C','.bk C','.wk D','.bk D','.wk E','.wk F','.bk F','.wk G','.bk G','.wk A','.bk A','.wk B'];
let getPressedKey;


// Styles 

const keyPressed = `box-shadow:inset 0px 0px 5px 10px rgba(131, 171, 184, 0.6);`
const keyDefault = `box-shadow:inset 0px -20px 5px 15px rgba(131, 171, 184, 0.6), 5px 10px 15px rgba(131, 171, 184, 0.8);`
const wkPressed = `box-shadow: inset 8px -5px 5px rgba(100,100,100, 0.35);`;
const wkDefault = `box-shadow: 3px 7px 2px lightgrey;`;
const bkPressed = `box-shadow: inset 8px -5px 15px 5px black;`;
const bkDefault = `box-shadow:inset 8px -5px 15px 5px rgba(211, 211, 211, 0.25), 0px 7px 0px black;`;



let getKey = div.addEventListener('keydown',function(event){
            getKey = event.key;
});

function displayKey(){
    if(keyList.includes(getKey)==true){
        indx = keyList.indexOf(getKey);
        showKey.innerText = note[indx].toUpperCase();
        keyButton.style.cssText = keyPressed;
        console.log(indx);

        // getPressedKey.style.cssText = wkPressed;
        // switch (true){
        //     case (indx==0):get;
        //     break;
        //     case (indx==1):;
        //     break;
        //     case (indx==2):;
        //     break;
        //     case (indx==3):;
        //     break;
        //     case (indx==4):;
        //     break;
        //     case (indx==5):;
        //     break;
        //     case (indx==6):;
        //     break;
        //     case (indx==7):;
        //     break;
        //     case (indx==8):;
        //     break;
        //     case (indx==9):;
        //     break;
        //     case (indx==10):;
        //     break;
        //     case (indx==11):;
        //     break;
        //     default:console.log('error');
        // }
} 
}

div.addEventListener('keyup',function(event){
    keyButton.style.cssText = keyDefault;
});



