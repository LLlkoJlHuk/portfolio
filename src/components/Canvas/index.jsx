import React, { useEffect } from 'react';

const CanvasComponent = () => {
    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const loadCanvasScripts = async () => {
            try {
                await loadScript('/canvas/pt.min.js');
                await loadScript('/canvas/canvas.js');
            } catch (error) {
                console.error('Ошибка при загрузке скриптов:', error);
            }
        };

        loadCanvasScripts();

        return () => {
            document.querySelectorAll('script[src^="/canvas/"]').forEach(script => script.remove());
        };
    }, []);

    return <div id="pt" className="canvas"></div>;
};

export default CanvasComponent;
