function enableDarkMode() {
    document.body.classList.add('dark-mode');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
}

function toggleDarkMode() {
    const modeToggle = document.getElementById('mode-toggle');
    
    if (modeToggle.checked) {
        enableDarkMode();
        localStorage.setItem('darkMode', 'enabled');
    } else {
        disableDarkMode();
        localStorage.setItem('darkMode', null);
    }
}

// Open your browser's console (usually by pressing F12 or right-clicking and selecting "Inspect" -> "Console")
// Type the following commands:

// Check if the 'darkMode' key exists in localStorage
if (localStorage.getItem('darkMode')) {
    // Log the value of the 'darkMode' key
    console.log('Dark mode preference:', localStorage.getItem('darkMode'));
} else {
    console.log('Dark mode preference not set.');
}
