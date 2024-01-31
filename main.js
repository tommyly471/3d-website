import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('mode-toggle');
  const body = document.body;

  // Check user's preference from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
      enableDarkMode();
      modeToggle.checked = true;
  }

  // Toggle between dark and light modes
  modeToggle.addEventListener('change', function () {
      if (modeToggle.checked) {
          enableDarkMode();
          localStorage.setItem('darkMode', 'enabled');
      } else {
          disableDarkMode();
          localStorage.setItem('darkMode', null);
      }
  });

  // Function to enable dark mode
  function enableDarkMode() {
      body.classList.add('dark-mode');
  }

  // Function to disable dark mode
  function disableDarkMode() {
      body.classList.remove('dark-mode');
  }
});

setupCounter(document.querySelector('#counter'))
