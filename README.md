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
   - Drop your customized PDF file into the `resources/` directory and explicitly name it `Ronodeep_Bhattacharya_Resume.pdf`. Because the filename is standardized, this automatically updates the Hero Section download link without you needing to edit `index.html`. Any other static assets, images, or icons (like `favicon.svg`) should also live in the `resources/` folder.

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

## Deployment & Workflow

To maintain a resilient and professional deployment pipeline, avoid pushing directly to `main`. Follow this standard lifecycle:

1. **Create a Feature Branch:**
   Branch off of `main` for your updates (e.g., updating a resume or adding a new skill).
   ```bash
   git checkout -b feature/update-resume
   ```

2. **Commit Your Changes:**
   Execute your changes locally and commit them with semantic messages.
   ```bash
   git add .
   git commit -m "docs: updated cv to latest version"
   ```

3. **Open a Pull Request:**
   Push the branch to your remote repository and open a Pull Request against `main`. This allows you to verify diffs before they go live.
   ```bash
   git push -u origin feature/update-resume
   ```

4. **Merge & Auto-Deploy:**
   Once the code is verified, merge the Pull Request into `main`. GitHub Pages is natively configured to listen to the `main` branch and will automatically trigger a build, deploying your updated site within ~30-60 seconds.
