// Generate a random number between 1 to 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Change the left dice picture based on randomNumber1
document.querySelector('.img1').setAttribute('src', 'images/dadu' + randomNumber1 + '.png');
// Change the right dice picture based on randomNumber2
document.querySelector('.img2').setAttribute('src', 'images/dadu' + randomNumber2 + '.png');
// Change the alt texts.
document.querySelectorAll('img')[0].setAttribute('alt', 'Pemain 1 mendapatkan angka ' + randomNumber1 + '.');
document.querySelectorAll('img')[1].setAttribute('alt', 'Pemain 2 mendapatkan angka ' + randomNumber2 + '.');
// Result
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = '🚩 Selamat untuk pemain 1!';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Selamat untuk pemain 2! 🚩';
} else if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').innerHTML = 'Seri!';
}
