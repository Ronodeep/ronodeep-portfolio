# Ronodeep Bhattacharya's Developer Portfolio

This repository contains the source code for my personal portfolio, built adhering to the premium "Technical Architect" design aesthetic. It is meticulously crafted to prioritize readability, performance, and an engineered, editorial digital experience.

## Tech Stack
- **Core:** Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Fonts:** Inter (Display), Manrope (Narrative/Body), Space Grotesk (Technical/Monospace).
- **Deployment:** Fully static, designed specifically to be hosted effortlessly on GitHub Pages without any build steps.

## Design System: "The Technical Architect"
This portfolio utilizes a highly specific design system:
- **No-Line Rule:** Borders are replaced by distinct structural background color shifts (elevations).
- **Glassmorphism:** Navigation menus use a frosted glass effect (`backdrop-filter`) with a 60% opacity fill over `surface-variant`.
- **Tonal Depth:** Shadows are ambient and soft, mimicking realistic architectural depth instead of standard drop-shadows.

## How to Update the Portfolio

Because this is built with Vanilla HTML/CSS/JS, updates are trivial and don't require `node_modules` or a build system:

1. **Changing Content (Text/Experience):**
   - Open `index.html`.
   - The `<article class="experience-card">` elements represent distinct past roles. To add a new role, duplicate an article and simply change the text.
   - For new skills, add `<div class="chip">SkillName</div>` within the appropriate grid quadrant in the `#skills` section.

2. **Changing Resumes / Assets:**
   - Replace the `CV_2026-01-07_Ronodeep_Bhattacharya.pdf` file with your updated resume, and change the `href` in the "Download Blueprint" anchor tag in the Hero Section of `index.html`.

3. **Styling / Theming tweaks:**
   - Open `styles/index.css`.
   - Modifying the `:root` variables at the absolute top of the file alters the whole app's appearance instantly. Changing `--primary-container` and `--primary` will adjust all buttons, glows, and technical text accents simultaneously.

4. **Running Locally:**
   - To preview the site, simply open `index.html` in a web browser.
   - Alternatively, use a lightweight server like Python's built-in HTTP server:
     ```bash
     python3 -m http.server 8000
     ```
     Navigate to `http://localhost:8000`.

## Deployment
Push changes directly to the `main` branch. GitHub Pages can be configured in your repository settings to serve directly from the `/` root folder. No GitHub Actions or CI pipeline configurations are inherently required, though one can be added for linting.
