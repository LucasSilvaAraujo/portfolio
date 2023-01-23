
const operative = document.querySelector('.operative');

const logo = document.querySelector('.logo');

const travel = document.querySelector('.travel');

operative.addEventListener('mouseover', () => {
  document.getElementById('d1').style.backgroundImage = "url('assets/operative.jpg')";
  document.getElementById('d2').style.backgroundImage = "url('assets/operative.jpg')";
  document.getElementById('d3').style.backgroundImage = "url('assets/operative.jpg')";
  document.getElementById('d4').style.backgroundImage = "url('assets/operative.jpg')";
});

travel.addEventListener('mouseover', () => {
  document.getElementById('d1').style.backgroundImage = "url('assets/travel2.png')";
  document.getElementById('d2').style.backgroundImage = "url('assets/travel2.png')";
  document.getElementById('d3').style.backgroundImage = "url('assets/travel2.png')";
  document.getElementById('d4').style.backgroundImage = "url('assets/travel2.png')";
});

logo.addEventListener('mouseover', () => {
  document.getElementById('d1').style.backgroundImage = "url('assets/telatablet.png')";
  document.getElementById('d2').style.backgroundImage = "url('assets/telatablet.png')";
  document.getElementById('d3').style.backgroundImage = "url('assets/telatablet.png')";
  document.getElementById('d4').style.backgroundImage = "url('assets/telatablet.png')";  
});

operative.addEventListener('mouseover', () => {
  document.getElementById('d1').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d2').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d3').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d4').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d1').style.opacity = 1;
  document.getElementById('d2').style.opacity = 1;
  document.getElementById('d3').style.opacity = 1;
  document.getElementById('d4').style.opacity = 1;
  
});

travel.addEventListener('mouseover', () => {
  document.getElementById('d1').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d2').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d3').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d4').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d1').style.opacity = 1;
  document.getElementById('d2').style.opacity = 1;
  document.getElementById('d3').style.opacity = 1;
  document.getElementById('d4').style.opacity = 1;
  
});

logo.addEventListener('mouseover', () => {
  document.getElementById('d1').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d2').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d3').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d4').style.transition = "all 0.5s ease-in-out";
  document.getElementById('d1').style.opacity = 1;
  document.getElementById('d2').style.opacity = 1;
  document.getElementById('d3').style.opacity = 1;
  document.getElementById('d4').style.opacity = 1;
  
});