let color = document.querySelector('#color');
let btn = document.querySelector('#btn');
let element = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', function() {
  document.body.querySelector('p').style.display = 'block';
  let hashtag = '#';
  for(let i = 0; i < 6; i++) {
    hashtag = hashtag + element[randomColor()];
    console.log(hashtag);
  }

  color.textContent = hashtag;
  document.body.style.backgroundColor = hashtag;


})


function randomColor() {
   return Math.floor(Math.random() * element.length);
} 
