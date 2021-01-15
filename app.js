// Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.pruchase button');
const description  = document.querySelector('.info h3');
const sizes  = document.querySelector('.sizes');


// Moving animation event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

  console.log(e.pageX, e.pageY);
});

// Animate in
container.addEventListener('mouseenter', (e) => {
  card.style.transform = 'none';
})

// Animate out
container.addEventListener('mouseleave', (e) => {
  card.style.transform = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})