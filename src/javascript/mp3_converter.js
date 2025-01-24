


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


const videoInput = document.getElementById('videoInput');
const convertButton = document.getElementById('convertButton');
const output = document.getElementById('output');

convertButton.addEventListener('click', async () => {
  if (!videoInput.files.length) {
    alert('Please select a video file.');
    return;
  }

  const file = videoInput.files[0];
  const fileName = file.name.split('.').slice(0, -1).join('.') + '.mp3';

  // Load FFmpeg
  output.textContent = 'Loading FFmpeg...';
  const { createFFmpeg, fetchFile } = FFmpeg;
  const ffmpeg = createFFmpeg({ log: true });

  await ffmpeg.load();
  output.textContent = 'Converting...';

  // Write the video file to FFmpeg
  ffmpeg.FS('writeFile', file.name, await fetchFile(file));

  // Run the conversion command
  await ffmpeg.run('-i', file.name, fileName);

  // Read the output file
  const data = ffmpeg.FS('readFile', fileName);

  // Create a downloadable link
  const blob = new Blob([data.buffer], { type: 'audio/mpeg' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.textContent = 'Download MP3';
  output.innerHTML = '';
  output.appendChild(link);

  ffmpeg.FS('unlink', file.name);
  ffmpeg.FS('unlink', fileName);
});





