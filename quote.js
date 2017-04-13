var quoteArray = ['quote 1','quote 2','quote 3','quote 4','quote 5','quote 6'];
var randomNumber = Math.floor((Math.random() * 5) + 1);
console.log('i am here')
document.getElementById('quote').innerHTML = quoteArray[randomNumber-1];