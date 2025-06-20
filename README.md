# Neon Concrete - Modern Construction Landing Page

A high-performance, responsive React landing page for Neon Concrete, a premier concrete construction company serving DFW & DMV areas.

## Features

- **Modern Design**: Brutalist-inspired layout with neon accents
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Fast loading with modern optimization techniques
- **Scalable Architecture**: Built with Atomic Design methodology
- **Smooth Animations**: Intersection Observer-based animations
- **Contact Form**: Integrated contact form with validation
- **SEO Ready**: Proper meta tags and semantic HTML

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Intersection Observer** - Smooth scroll animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd neon-concrete
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

2. Deploy
```bash
npm run deploy
```

## Project Structure

```
src/
├── assets/
│   └── logo.svg        # Company logo
├── components/
│   ├── atoms/          # Basic UI elements
│   ├── molecules/      # Simple component combinations
│   ├── organisms/      # Complex UI sections
│   ├── templates/      # Page layouts
│   └── pages/          # Complete pages
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'neon-cyan': '#00ffff',      // Primary neon accent
  'concrete-dark': '#1a1a1a',  // Dark background
  'concrete-medium': '#2a2a2a', // Medium background
  'concrete-light': '#f5f5f5',  // Light text
  'concrete-grey': '#888888'    // Secondary text
}
```

### Typography
Fonts are configured in `tailwind.config.js` and loaded via Google Fonts in `index.html`.

## Performance Features

- Lazy loading with Intersection Observer
- Optimized animations with CSS transforms
- Minimal bundle size with tree shaking
- Progressive enhancement approach

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2025 Neon Concrete Construction LLC. All rights reserved.
#   n e o n - c o n c r e t e  
 #   n e o n - c o n c r e t e  
 #   n e o n - c o n c r e t e v 2  
 