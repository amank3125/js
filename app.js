const apiKey = 'EC5601D5-C244-4166-8D9A-D35BBED83D0C';
let display = document.querySelector('.price');
let ticker1 = document.querySelector('.ticker1');
let ticker2 = document.querySelector('.ticker2');
let decimals = document.querySelector('.ticker2');
let price = 0;

  function update(){
    let coinName1 = $('.ticker1').val();
    let coinName2 = $('.ticker2').val();
    let decimals = $('.decimals').val();
    var rate = 0;
    fetch(`https://rest.coinapi.io/v1/exchangerate/${coinName1}/${coinName2}?apikey=${apiKey}`)
    .then((response) => response.json())
    .then((json) => display.innerHTML = `The current price of ${coinName1} is ${json.rate.toFixed(decimals)} ${coinName2}`);
  }