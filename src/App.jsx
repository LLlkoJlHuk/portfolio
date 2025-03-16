import { useState } from "react";
import { useRoutes, useLocation  } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import routes from "./routes/index.jsx";
import SettingsContext from "./context/settings.js";
import Canvas from "@/canvas/index.jsx";
import CanvasLoader from "@/components/CanvasLoader/index.jsx";
import Menu from "@/components/Menu/index.jsx";

function AnimatedRoutes() {
    const location = useLocation();
    const page = useRoutes(routes);

    const [settings, setSettings] = useState(() => {
        const savedLang = localStorage.getItem("lang");
        return { lang: savedLang || "en" };
    });

    function changeLanguage(newLang) {
        setSettings(prevSettings => {
            const newSettings = { ...prevSettings, lang: newLang };
            localStorage.setItem("lang", newLang);
            return newSettings;
        });
    }

    return (
        <SettingsContext.Provider value={{settings, changeLanguage}}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Canvas />
                    <CanvasLoader />
                    <Menu />
                    { page ?? <div>Page not found</div> }
                </motion.div>
            </AnimatePresence>
        </SettingsContext.Provider>
    );
}

function App() {
    return <AnimatedRoutes />;
}

export default App
