/**
 * Utility to handle asset paths across different environments (local vs LH server theme)
 */
export const getAssetPath = (path: string): string => {
    if (!path) return '';

    // If it's already an absolute URL, return as is
    if (path.startsWith('http') || path.startsWith('//')) return path;

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

    if (!prefix || normalizedPath.startsWith(`${prefix}/`)) {
        return normalizedPath;
    }

    return `${prefix}${normalizedPath}`;
};

/**
 * Transforms an image path into its thumbnail equivalent (_thumb.webp)
 */
export const getThumbPath = (path: string): string => {
    if (!path) return '';
    const fullPath = getAssetPath(path);
    if (fullPath.endsWith('.svg') || fullPath.endsWith('_thumb.webp')) return fullPath;
    
    const lastDotIndex = fullPath.lastIndexOf('.');
    if (lastDotIndex === -1) return fullPath;
    
    return `${fullPath.substring(0, lastDotIndex)}_thumb.webp`;
};
