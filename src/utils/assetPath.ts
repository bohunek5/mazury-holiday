/**
 * Utility to handle asset paths across different environments (local vs LH server theme)
 */
export const getAssetPath = (path: string): string => {
    if (!path) return '';
    
    // If it's already an absolute URL, return as is
    if (path.startsWith('http') || path.startsWith('//')) return path;
    
    // In production (LH server), we need to prefix public assets
    // because they are located in wp-content/themes/mazury-clone/out/
    const isProduction = process.env.NODE_ENV === 'production';
    
    // We can also check if we are in the browser and check the hostname
    const isLHServer = typeof window !== 'undefined' && 
                      (window.location.hostname === 'zeglarstwomazury.pl' || 
                       window.location.hostname === 'www.zeglarstwomazury.pl');

    if (isProduction || isLHServer) {
        const prefix = '/wp-content/themes/mazury-clone/out';
        // Avoid double prefixing
        if (path.startsWith(prefix)) return path;
        return `${prefix}${path.startsWith('/') ? '' : '/'}${path}`;
    }

    return path.startsWith('/') ? path : `/${path}`;
};
