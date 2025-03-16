import { useEffect } from "react";

export default function CanvasLoader() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `/canvas/canvas.js?v=${Date.now()}`;  // Уникальный параметр
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
