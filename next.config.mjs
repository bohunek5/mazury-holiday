/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/mazury-holiday",
    images: {
        // Must use unoptimized: true for static export (output: "export")
        // Images are pre-compressed using scripts/compress-images.js before build
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    // Ensure trailing slashes for GitHub Pages
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
