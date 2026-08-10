declare module 'pannellum-react' {
    import type { ComponentType } from 'react';

    export const Pannellum: ComponentType<{
        width?: string;
        height?: string;
        image: string;
        pitch?: number;
        yaw?: number;
        hfov?: number;
        autoLoad?: boolean;
        showZoomCtrl?: boolean;
        showFullscreenCtrl?: boolean;
    }>;
}
