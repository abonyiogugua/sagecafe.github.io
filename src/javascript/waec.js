
// nav bar end====================

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// nav bar end====================


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



// preloader ============================
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".content");

    // Hide preloader and show content
    preloader.style.display = "none";
    content.style.display = "block";

    // Allow scrolling after the preloader is hidden
    document.body.style.overflow = "auto";
});
// preloader end ============================


