import { useEffect } from "react";

export default function CanvasLoader() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/canvas/canvas.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
