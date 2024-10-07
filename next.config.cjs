const { build } = require("./build/static/js/main.e17c5dcb");

// next.config.js
module.exports = {
    output: 'export',  // Enables static export
    images: {
      unoptimized: true,  // Optional: Disable image optimization for static export
    },
    basePath: '/',  // Set this if deploying to GitHub Pages
    assetPrefix: '/',  // Also set this for GitHub Pages,
    build: {
      assetsInclude: ['**/*.md'],
    }
  };
  