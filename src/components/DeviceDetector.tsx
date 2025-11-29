import { useEffect } from 'react';
import { useDevice } from '../hooks/useDevice';

export function DeviceDetector() {
    const deviceType = useDevice();

    useEffect(() => {
        // Remove existing device classes
        document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');

        // Add current device class
        document.body.classList.add(`device-${deviceType}`);

        // Also add to root element
        const root = document.getElementById('root');
        if (root) {
            root.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
            root.classList.add(`device-${deviceType}`);
        }
    }, [deviceType]);

    return null; // This component doesn't render anything
}

