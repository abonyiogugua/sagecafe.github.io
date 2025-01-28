// nav bar end====================

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// nav bar end====================







// testimonial====================
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentSlide = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(0);
});
// testimonial end====================

// nav tools====================

const service = document.getElementById("service_section");
const about = document.getElementById("about_section");
const contact = document.getElementById("contact_section");


function service_change() {
  service.style.display = "block";
  about.style.display = "none";
  contact.style.display = "none";
}

function about_change() {
  about.style.display = "block";
  service.style.display = "none";
  contact.style.display = "none";

}

function contact_change() {
  contact.style.display = "block";
  service.style.display = "none";
  about.style.display = "none";
}

function service_change_pg() {
  service.style.display = "block";
  contact.style.display = "none";
  home.style.display = "none";
  about.style.display = "none";
}



// nav tools end====================

// Testimonials carousel (uses the Owl Carousel library)
// Select the toggle input and body
const toggleInput = document.getElementById('theme-toggle');
const body = document.body;

// Function to set theme
function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    toggleInput.checked = true;
  } else {
    body.classList.remove('dark-mode');
    toggleInput.checked = false;
  }
}

// Load saved theme from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
}

// Event listener for toggle
toggleInput.addEventListener('change', () => {
  const theme = toggleInput.checked ? 'dark' : 'light';
  setTheme(theme);
  localStorage.setItem('theme', theme);
});





