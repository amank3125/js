let closeAlertBox = document.querySelector('#closeAlert')
let AlertBox = document.querySelector('#alertBox')
let homeBtn = document.querySelector('#homeBtn');

closeAlertBox.addEventListener('click',function(e){
        AlertBox.style.display = 'none';
        console.log('done');
    });

homeBtn.addEventListener('click',function(e){
    window.location.replace('./');
})