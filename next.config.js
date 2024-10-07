// next.config.js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    // Uncomment and set these to your actual base path and asset prefix if needed for GitHub Pages or other hosting
    // basePath: '/your-repo-name',
    // assetPrefix: '/your-repo-name/',
  };
  
  export default nextConfig;
