# 🎮 Unblocked Games Hub - FNAF Collection

A modern, responsive website for playing FNAF (Five Nights at Freddy's) games directly from GitHub repositories. Features a sleek dark theme, fullscreen image viewer, and easy access to game repositories.

## ✨ Features

- 🎯 **6 Game Cards** - FNAF 1, 2, 3, 4, 5, and FNAE
- 🖼️ **Fullscreen Image Viewer** - Click the fullscreen button (⛶) on any game
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Dark Horror Theme** - Themed to match the FNAF atmosphere
- 🔗 **Direct GitHub Links** - Quick access to game repositories
- ⌨️ **Keyboard Support** - Press ESC to close fullscreen
- 📊 **Smooth Animations** - Interactive hover effects and transitions

## 📂 Project Structure

```
unblocked-games-hub/
├── index.html          # Main HTML file
├── styles.css          # CSS styling (dark theme)
├── script.js           # JavaScript functionality
├── README.md           # This file
├── .gitignore          # Git ignore file
└── assets/             # Game images directory
    ├── fnaf1.jpg       # FNAF 1 image
    ├── fnaf2.jpg       # FNAF 2 image
    ├── fnaf3.jpg       # FNAF 3 image
    ├── fnaf4.jpg       # FNAF 4 image
    ├── fnaf5.jpg       # FNAF 5 image
    └── fnae.jpg        # FNAE image
```

## 🎮 Games Included

| Game | Repository | Image |
|------|-----------|-------|
| Five Nights at Freddy's 1 | [irv77/hd_fnaf](https://github.com/irv77/hd_fnaf) | Image 1 |
| Five Nights at Freddy's 2 | [irv77/hd_fnaf](https://github.com/irv77/hd_fnaf) | Image 2 |
| Five Nights at Freddy's 3 | [irv77/hd_fnaf](https://github.com/irv77/hd_fnaf) | Image 3 |
| Five Nights at Freddy's 4 | [irv77/hd_fnaf](https://github.com/irv77/hd_fnaf) | Image 4 |
| Five Nights at Freddy's 5 | [irv77/hd_fnaf](https://github.com/irv77/hd_fnaf) | Image 6 |
| Five Nights at Epstein's | [n1yshi/Five-Nights-at-Epstein](https://github.com/n1yshi/Five-Nights-at-Epstein) | Image 5 |

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Clicker-maker/unblocked-games-hub.git
cd unblocked-games-hub
```

2. Add game images to the `assets/` folder:
   - `fnaf1.jpg` - FNAF 1 image
   - `fnaf2.jpg` - FNAF 2 image
   - `fnaf3.jpg` - FNAF 3 image
   - `fnaf4.jpg` - FNAF 4 image
   - `fnaf5.jpg` - FNAF 5 image
   - `fnae.jpg` - FNAE image

3. Open `index.html` in your web browser

### GitHub Pages Deployment

1. Go to repository settings
2. Navigate to "Pages" section
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` directory
5. Click Save

Your site will be live at `https://Clicker-maker.github.io/unblocked-games-hub/`

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-dark: #1a1a1a;
    --secondary-dark: #2d2d2d;
    --accent-red: #ff4444;
    --accent-orange: #ff8c00;
    --text-light: #ffffff;
    --text-gray: #cccccc;
}
```

### Add New Games
1. Add a new game card in `index.html`:
```html
<div class="game-card">
    <div class="game-image-wrapper">
        <img src="assets/your-game.jpg" alt="Your Game" class="game-image">
        <div class="image-overlay">
            <button class="fullscreen-btn" title="Open Fullscreen">⛶</button>
        </div>
    </div>
    <h3>Your Game Title</h3>
    <p class="game-description">Game description</p>
    <div class="game-links">
        <a href="https://github.com/owner/repo" target="_blank" class="btn btn-github">View Repository</a>
    </div>
</div>
```

2. Add the corresponding image to `assets/` folder

## ⌨️ Keyboard Shortcuts

- **ESC** - Close fullscreen image viewer
- **Click Outside** - Close fullscreen image viewer

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Security

- No user data collection
- All game links point to public GitHub repositories
- No external dependencies or CDNs (pure HTML/CSS/JS)
- Safe to use in any environment

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to:
- Add more games to the collection
- Improve the design
- Add new features
- Report bugs

## 👤 Author

[Clicker-maker](https://github.com/Clicker-maker)

## 🙏 Credits

- Game repositories: [irv77](https://github.com/irv77), [n1yshi](https://github.com/n1yshi)
- Icons and design inspiration from the FNAF community

---

**Enjoy your unblocked games! 🎮**
