/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Images are served from the public /mazury-holiday directory.
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
