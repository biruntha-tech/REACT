# HOPE3 Website Setup

## Project Structure
```
src/
 ├── components/
 │     ├── Navbar.jsx
 │     └── Hero.jsx
 ├── pages/
 │     └── HomePage.jsx
 ├── assets/
 │     ├── logo.jpg
 │     ├── hope3.jpg
 │     ├── usericon.jpg
 │     └── graduation.jpg
 ├── styles/
 │     ├── navbar.css
 │     ├── hero.css
 │     └── homepage.css
 ├── App.jsx
 ├── App.css
 └── index.css
```

## Run the Project

1. Install dependencies (if not already done):
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown (typically http://localhost:5173)

## Features

✅ Fixed navbar with white background and subtle shadow
✅ Centered HOPE3 logo in navbar
✅ Dropdown menus on hover (desktop) and tap (mobile)
✅ Round "Get Involved" button with icon
✅ Full-width hero image (375px height, adjustable via CSS variable)
✅ Responsive hamburger menu for mobile
✅ ARIA attributes for accessibility
✅ Plain CSS (no frameworks)

## Customization

To adjust hero height, edit `src/styles/hero.css`:
```css
:root {
  --hero-height: 375px; /* Change this value */
}
```
