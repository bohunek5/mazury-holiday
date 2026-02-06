/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/mazury-holiday",
    images: {
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
