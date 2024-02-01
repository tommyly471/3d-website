document.addEventListener('DOMContentLoaded', function () {
    // Check user's preference from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
        document.getElementById('mode-toggle').checked = true;
    }

    // Toggle between dark and light modes
    document.getElementById('mode-toggle').addEventListener('change', toggleDarkMode);
});