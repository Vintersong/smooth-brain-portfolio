# Andrei Moldovean — Static Portfolio (Bootstrap 5.3)

This is a small static portfolio site built with **Bootstrap 5.3** and minimal custom CSS/JS. It follows the structure and styling requested — dark theme, Bahnschrift fonts, modal video embeds (click-to-play), slide-down modals, carousel, and responsive layout.

## Files
- `index.html` — main page
- `css/styles.css` — minimal custom CSS (colors, Bahnschrift headers, modal animation)
- `js/scripts.js` — helper JS for modal video injection (click-to-play) and pause on close
- `images/` — image folder (the site uses placeholder images by default)

## How to Use
1. Open `index.html` in your browser (double-click or run a local static server). Example for a simple local test with Python:

```cmd
python -m http.server 8000
# then open http://127.0.0.1:8000 in a browser
```

2. Click the navbar items to navigate, use the carousel controls, and click a project card's "View" button to open a modal with a video. Modal videos are only loaded on open (click-to-play) and are paused when the modal closes.

## Notes & Customization
- Fonts: this project uses `Bahnschrift` as requested. On many systems (Windows), that font is available. If it isn't installed, the browser will pick a system fallback. To bundle a web font you can add it to the project and update `styles.css`.
- Colors: main colors configured in `css/styles.css` are `--bg-dark`, `--card`, `--accent`, and `--pink`.
- Modal animation: implemented through `styles.css` overriding the default transform of `.modal-dialog` for a slide-down effect.
- Video embeds: frames are injected from `data-src` only on modal opening to prevent autoplay.
- Carousel captions use `monospace` fonts (as requested).

## Performance
This project uses CDN resources for Bootstrap and Bootstrap Icons to keep load times low. All custom CSS and JS are intentionally tiny to meet the 2000ms target on a normal broadband connection.

## Extending the Project
- Replace the placeholder images in the `index.html` with the provided pixel-art image by updating the `src` attribute for the first carousel image.
- Replace the YouTube `data-src` values with the actual project videos.

Enjoy — contact me on `.github` / `.linkedin`.
