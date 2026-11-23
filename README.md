# Avinash Verma — Personal Portfolio Website

A clean, formal, and responsive personal portfolio website engineered using pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed with executive typography, modular UI sections, interactive category filtering, and print-ready CV formatting.

---

## 🌟 Key Highlights

- **Pure Web Standards:** Zero heavy dependencies, libraries, or build steps — runs natively in any modern browser.
- **Permanent Bright Mode Design:** Clean, formal palette featuring high-contrast typography, refined borders, and balanced whitespace.
- **Typography Pairing:**
  - **Plus Jakarta Sans:** Crisp, authoritative interface typography.
  - **Newsreader:** Editorial serif headings for formal representation.
  - **JetBrains Mono:** Code tokens, metadata tags, and technical specs.
- **Interactive Competency Matrix:** Dynamic category filtering across programming languages, frontend web development, and developer tools.
- **Formal Print CV Support:** Built-in `@media print` stylesheet. Click **"Print CV"** or press `Ctrl + P` to export a clean, unembellished resume document.
- **Interactive Contact Suite:**
  - Validated contact form with automatic `mailto` draft preparation.
  - Direct verified LinkedIn link integration.
- **Fully Responsive:** Smooth layout transitions across mobile, tablet, and desktop viewports with an accessible hamburger drawer navigation.

---

## 📂 Project Structure

```text
Portfolio Training/
├── index.html        # Semantic HTML5 markup, document structure, and accessibility landmarks
├── styles.css        # Design tokens, responsive layouts, component styles, and print media queries
├── script.js         # Vanilla JS: drawer toggle, scroll spy, skill filters, contact form handler
└── README.md         # Project documentation and guide
```

---

## 🚀 Getting Started

No compilation, Node.js installation, or package manager is required.

### Method 1: Direct Browser Launch
Simply double-click `index.html` or drag it into any web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Method 2: VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension if not already installed.
3. Right-click `index.html` and choose **"Open with Live Server"**.

### Method 3: Python Local HTTP Server
Run the following command in your terminal:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## 🛠️ How to Customize

All content is structured semantically inside `index.html`:

1. **Personal Information & Bio:**
   - Modify the text inside `<section id="hero">` and `<section id="about">` in `index.html`.
2. **Technical Skills:**
   - Add or remove skills within the `<div class="skills-grid">` containers. Assign corresponding `data-category` attributes (`languages`, `frontend`, `tools`) to align with the interactive filter tabs.
3. **Projects & Practical Works:**
   - Update `<section id="projects">` with your personal software projects, repositories, or live demo URLs.
4. **Academic Credentials:**
   - Update `<section id="education">` with your university degree, institution, and completion year.
5. **Contact Links:**
   - Replace the email address and LinkedIn link in `<section id="contact">` with your personal channels.

---

## 🌐 Free Deployment Options

This static website can be deployed in seconds to any free hosting provider:

- **GitHub Pages:**
  1. Push the code to a GitHub repository.
  2. Go to **Settings** > **Pages** > Select `main` branch > **Save**.
- **Netlify:**
  - Drag and drop the `Portfolio Training` folder directly into [Netlify Drop](https://app.netlify.com/drop).
- **Vercel:**
  - Import the GitHub repository or run `vercel` via CLI.

---

## 👤 Author & Connect

- **Name:** Avinash Verma
- **LinkedIn:** [linkedin.com/in/avinash-verma-9809b5411](https://www.linkedin.com/in/avinash-verma-9809b5411?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **License:** Open for personal portfolio usage and customization.
