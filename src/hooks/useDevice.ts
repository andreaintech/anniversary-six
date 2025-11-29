import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

function detectDeviceType(): DeviceType {
    if (globalThis.window === undefined) return 'desktop';

    const width = globalThis.window.innerWidth;

    // Check if it's a mobile device by user agent
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );

    // Also check for touch capability
    const hasTouchScreen = 'ontouchstart' in globalThis.window || navigator.maxTouchPoints > 0;

    // If it's a mobile device or has touch and is small, prioritize mobile
    if (isMobileDevice || (hasTouchScreen && width < 1024)) {
        if (width < 768) return 'mobile';
        // Even if wider, if it's a mobile device, treat as mobile for small screens
        if (width < 1024) return 'mobile';
    }

    // Standard width-based detection
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
}

export function useDevice(): DeviceType {
    const [deviceType, setDeviceType] = useState<DeviceType>(detectDeviceType);

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(detectDeviceType());
        };

        globalThis.window.addEventListener('resize', handleResize);
        // Initial check on mount (in case initial state was wrong)
        handleResize();

        return () => globalThis.window.removeEventListener('resize', handleResize);
    }, []);

    return deviceType;
}

export function useIsMobile(): boolean {
    const device = useDevice();
    return device === 'mobile';
}

export function useIsDesktop(): boolean {
    const device = useDevice();
    return device === 'desktop';
}

