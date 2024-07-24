/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          // pathname: '/account123/**',
        },
      ],
        // domains: ['images.unsplash.com'],
      },
};

export default nextConfig;
