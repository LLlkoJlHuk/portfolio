import { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes/index.jsx";
import SettingsContext from "./context/settings.js";
import Canvas from "@/canvas/index.jsx";
import Menu from "@/components/Menu/index.jsx";


function App() {
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

    return <SettingsContext.Provider value={{settings, changeLanguage}}>
        <Canvas />
        <Menu />
        { page ?? <div>Page not found</div> }
    </SettingsContext.Provider>
}

export default App;
