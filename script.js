// Fullscreen functionality
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeBtn = document.getElementById('closeFullscreen');
    const fullscreenBtns = document.querySelectorAll('.fullscreen-btn');

    // Open fullscreen
    fullscreenBtns.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const gameImage = this.closest('.game-image-wrapper').querySelector('.game-image');
            fullscreenImage.src = gameImage.src;
            fullscreenModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close fullscreen
    function closeFullscreen() {
        fullscreenModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeFullscreen);

    // Close on outside click
    fullscreenModal.addEventListener('click', function(e) {
        if (e.target === fullscreenModal) {
            closeFullscreen();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFullscreen();
        }
    });

    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add touch support for mobile fullscreen
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipe() {
        if (fullscreenModal.classList.contains('active')) {
            if (touchEndX < touchStartX - 50) {
                // Swiped left - could implement next image
                console.log('Swiped left');
            }
            if (touchEndX > touchStartX + 50) {
                // Swiped right - could implement previous image
                console.log('Swiped right');
            }
        }
    }

    fullscreenModal.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    fullscreenModal.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
});
