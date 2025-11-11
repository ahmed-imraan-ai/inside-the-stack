# 🚀 Inside the Stack: Understanding How Modern Web Apps Work

## Project Overview

**Inside the Stack** is a mini educational website designed to explain the fundamental layers of modern web development—Frontend, Backend, DevOps, and Security—from a user-friendly perspective. This project was created as an assignment to demonstrate proficiency in **HTML5, CSS3, and JavaScript (including jQuery)**, focusing on clean, responsive design and semantic structure.

---

## ✨ Features & Technologies

### Core Concepts Demonstrated

-   **Responsive Design:** Fully fluid layout built with a mobile-first approach using Flexbox and CSS Grid.
-   **Semantic HTML5:** Proper use of tags (`<header>`, `<main>`, `<section>`, `<article>`) for improved accessibility and SEO.
-   **CSS Design System:** Use of **CSS Custom Properties** (variables) to manage branding (colors, fonts, spacing) for site-wide consistency.
-   **Dynamic Component Loading:** Implementation of JavaScript (using jQuery's AJAX functionality) to dynamically load the Header and Footer from external HTML files, promoting modularity.
-   **JavaScript Interactivity:**
    -   Animated mobile menu toggle (Hamburger Menu).
    -   Smooth "Scroll-to-Top" button.
    -   Custom CSS animations (e.g., blinking bullet points).

### Technologies Used

| Category                | Tools & Languages                               |
| :---------------------- | :---------------------------------------------- |
| **Structure & Styling** | HTML5, CSS3, Custom Properties                  |
| **Interactivity**       | Vanilla JavaScript (ES6+), **jQuery (3.7.1)**   |
| **Design**              | Poppins & Inter (Google Fonts), Custom SVG Logo |
| **Code Formatting**     | Prettier (`.prettierrc` included)               |
| **Modularity**          | JS Component Loading (`componentLoader.js`)     |

---

## 🏗️ Project Structure

The codebase is organized into modular files for easy maintenance:

```
inside-the-stack/
├── components/ # Reusable HTML for header and footer
│ ├── header.html
│ └── footer.html
├── css/
│ ├── var.css # Variables
│ ├── main.css # Base styles, reset, utility classes
│ └── *.css # Modular styles (e.g., homepage.css, header.css)
├── js/
│ ├── componentLoader.js # Loads header/footer asynchronously
│ └── main.js # jQuery and JS scripts for interactive functions like menu and scroll
├── index.html # Homepage
├── frontend.html # Frontend Overview page
├── frontend/*.html # Frontend module pages
├── backend.html # Backend Overview page
├── backend/*.html # Backend module pages
├── devops.html # DevOps Overview pages
├── devops/*.html # DevOps module pages
├── security.html # Security Overview page
└── security/*.html # Security module pages
```

---

## 👤 Author

-   **Student Name:** Ahmed Imraan
-   **Student ID:** CYX29806
-   **Created For:** Introduction to Web Design AUG2025

---

## 💡 How to Run Locally

1.  **Clone the Repository:**
    ```bash
    git clone git@github.com:ahmed-imraan-ai/inside-the-stack.git
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd inside-the-stack
    ```
3.  **Launch:** Since this project uses JavaScript to load components from the `/components` directory, it requires a local web server to run correctly (due to browser security restrictions on cross-file AJAX requests).
    -   **Recommended:** Use the **Live Server** extension in VS Code.
    -   **Alternative:** Launch a simple Python HTTP server from the root directory:
        ```bash
        python -m http.server 8000
        ```
4.  **Open in Browser:** Open your browser and navigate to `http://localhost:8000`.

---

**Resources Used:**

-   Google Fonts (Poppins, Inter)
-   unDraw (Vector Illustrations)
-   Figma (Design System and Mockups)
-   Affinity (Logo design)
-   MDN Web Docs (Reference)
-   jQuery Library (v3.7.1)
