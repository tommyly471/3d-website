document.addEventListener('DOMContentLoaded', function () {
    
    const slider = document.querySelector('.slider');
    const navLinks = document.querySelectorAll('.slider-nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const slideId = link.getAttribute('href').substring(1);
            const targetSlide = document.getElementById(slideId);
            const targetPosition = targetSlide.offsetLeft;

            slider.scrollTo({
            left: targetPosition,
            behavior: 'smooth'
            });
        });
    });
});