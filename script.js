// Game URLs from GitHub Pages
const gameURLs = {
    "1": "https://irv77.github.io/hd_fnaf/game1.html",
    "2": "https://irv77.github.io/hd_fnaf/game2.html",
    "3": "https://irv77.github.io/hd_fnaf/game3.html",
    "4": "https://irv77.github.io/hd_fnaf/game4.html",
    "5": "https://irv77.github.io/hd_fnaf/game5.html",
    "epstein": "https://n1yshi.github.io/Five-Nights-at-Epstein/"
};

document.addEventListener('DOMContentLoaded', function() {
    const gameModal = document.getElementById('gameModal');
    const gameFrame = document.getElementById('gameFrame');
    const closeBtn = document.getElementById('closeGame');
    const playBtns = document.querySelectorAll('.fullscreen-btn');

    // Open game in fullscreen
    playBtns.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const gameId = this.getAttribute('data-game');
            const gameUrl = gameURLs[gameId];
            
            if (gameUrl) {
                gameFrame.src = gameUrl;
                gameModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close game
    function closeGame() {
        gameModal.classList.remove('active');
        gameFrame.src = '';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeGame);

    // Close on outside click
    gameModal.addEventListener('click', function(e) {
        if (e.target === gameModal) {
            closeGame();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && gameModal.classList.contains('active')) {
            closeGame();
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

    // Add touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipe() {
        if (gameModal.classList.contains('active')) {
            if (touchEndX < touchStartX - 50) {
                console.log('Swiped left');
            }
            if (touchEndX > touchStartX + 50) {
                console.log('Swiped right');
            }
        }
    }

    gameModal.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    gameModal.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
});
