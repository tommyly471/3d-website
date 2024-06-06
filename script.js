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
        new URL('/pictures/sanrio/badtz-marufixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/cinnamorollfixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/gudetamafixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/hangyodonfixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/hellokittyfixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/kerokerokeroppifixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/kuromifixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/mymelodyfixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/pochaccofixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/pompompurinfixed.png', import.meta.url).href,
        new URL('/pictures/sanrio/tuxedosamfixed.png', import.meta.url).href
    ];

    const toggleCheckbox = document.getElementById('toggle-images');
    let imageInterval;

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

        const textAreas = document.querySelectorAll('.text-area');

        // Calculate potential positions that don't overlap with text areas
        let positionIsValid = false;
        let top, left;
        while (!positionIsValid) {
            top = Math.random() * (document.documentElement.scrollHeight - 100); // 100 is the height of the image
            left = Math.random() * (document.documentElement.scrollWidth - 100); // 100 is the width of the image

            positionIsValid = true;
            textAreas.forEach(textArea => {
                const textAreaRect = textArea.getBoundingClientRect();
                const imgRect = {
                    top: top,
                    bottom: top + 100,
                    left: left,
                    right: left + 100
                };

                if (!(imgRect.top > textAreaRect.bottom ||
                    imgRect.bottom < textAreaRect.top ||
                    imgRect.right < textAreaRect.left ||
                    imgRect.left > textAreaRect.right)) {
                    positionIsValid = false;
                }
            });
        }

        img.style.top = top + 'px';
        img.style.left = left + 'px';

        img.addEventListener('click', () => {
            img.remove();
        });

        document.body.appendChild(img);
    }
});