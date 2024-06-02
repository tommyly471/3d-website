console.log('script.js is loaded and executed.');

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

let imageInterval;

document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'pictures/sanrio/badtz-maru.png',
        'pictures/sanrio/cinnamoroll jpg.png',
        'pictures/sanrio/gudetama.png',
        'pictures/sanrio/hangyodon.png',
        'pictures/sanrio/hellokitty.png',
        'pictures/sanrio/kerokerokeroppi.png',
        'pictures/sanrio/kuromipng.png',
        'pictures/sanrio/my melody.png',
        'pictures/sanrio/pochacco.png',
        'pictures/sanrio/pompompurin.png',
        'pictures/sanrio/Tuxedosam.png'
    ];

    const toggleCheckbox = document.getElementById('toggle-images');

    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            imageInterval = setInterval(showImage, 10000);
        } else {
            clearInterval(imageInterval);
            imageInterval = null;
            document.querySelectorAll('.image-popup').forEach(img => img.remove());
        }
    });

    function showImage() {
        const img = document.createElement('img');
        img.src = images[Math.floor(Math.random() * images.length)];
        img.classList.add('image-popup');

        // Ensure the image appears within the visible area of the document
        const maxWidth = document.documentElement.scrollWidth - 100; // 100 is the width of the image
        const maxHeight = document.documentElement.scrollHeight - 100; // 100 is the height of the image

        img.style.top = Math.random() * maxHeight + 'px';
        img.style.left = Math.random() * maxWidth + 'px';

        img.addEventListener('click', () => {
            img.remove();
        });

        document.body.appendChild(img);
    }
});