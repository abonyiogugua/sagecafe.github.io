

//side bar menu==========
const side_bar=document.getElementById('sidebar1');
const menu_svg=document.getElementById('menu_btn');
const close_svg=document.getElementById('close_btn');

function close_nav(){
    if(side_bar.style.display=='block'){
      side_bar.style.transition="2s"
        side_bar.style.display='none';
        close_svg.style.display='none';
        menu_svg.style.display='block';
    }
    else{
        side_bar.style.display='block';
        close_svg.style.display='block';
        menu_svg.style.display='none';
    }
}
//side bar menu end==========

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
  
    

    // theme toggle============================
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
    
    
    // theme toggle end============================


// nav bar ============================







// nav bar end============================
