/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    output: "export",
    trailingSlash: true,
    assetPrefix: "/wp-content/themes/mazury-clone/out",
    typescript: {
        ignoreBuildErrors: true,
    },
};
export default nextConfig;
