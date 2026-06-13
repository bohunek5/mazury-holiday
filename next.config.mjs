const deployTarget = process.env.DEPLOY_TARGET || "";
const isGithubPages =
    deployTarget === "github-pages" || process.env.GITHUB_PAGES === "true";
const isWordPress = deployTarget === "wordpress";
const publicBase = isGithubPages
    ? "/mazury-holiday"
    : isWordPress
      ? "/wp-content/themes/mazury-clone/out"
      : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        qualities: [25, 50, 75, 95, 100],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
    output: process.env.NODE_ENV === "development" ? undefined : "export",
    trailingSlash: true,
    basePath: isGithubPages ? publicBase : undefined,
    assetPrefix: publicBase || undefined,
    env: {
        NEXT_PUBLIC_ASSET_PREFIX: publicBase,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};
export default nextConfig;
