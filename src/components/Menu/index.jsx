import {useContext} from "react";
import {useMenu} from "@/hooks/useMenu.js";
import SwitchLang from "@/components/SwitchLang/index.jsx";
import dictionary from "../../constants/dictionary.jsx";
import SettingsContext from "../../context/settings.js";
import styles from "./index.module.css";

function Menu() {
    const { settings, changeLanguage } = useContext(SettingsContext);
    const { menuIsOpen, toggleMenu, menu } = useMenu();

    return (
        <div className={`${styles["menu"]} ${menuIsOpen ? styles["isOpen"] : ""}`}>
            <div className={styles["burger-menu"]} onClick={toggleMenu}>
                <div className={styles["burger-menu--line"]}></div>
                <div className={styles["burger-menu--line"]}></div>
                <div className={styles["burger-menu--line"]}></div>
                <div className={styles["burger-menu--line"]}></div>
            </div>

            <div className={styles["menu-wrapper"]} ref={menu}>
                <div className={styles["menu-items"]}>
                    <a href="/" className={styles["menu--item"]}>{dictionary.mainPage[settings.lang]}</a>
                    <a href="/projects" className={styles["menu--item"]}>{dictionary.projectsPage[settings.lang]}</a>
                    <a href="/skills" className={styles["menu--item"]}>{dictionary.skillsPage[settings.lang]}</a>
                    <a href="/contacts" className={styles["menu--item"]}>{dictionary.contactsPage[settings.lang]}</a>
                </div>

                <div className={styles["change-language"]}>
                    <p>{dictionary.setLanguage[settings.lang]}</p>

                    <SwitchLang checked={settings.lang === 'ru'} onChange={() => changeLanguage(settings.lang === 'ru' ? 'en' : 'ru')}/>
                </div>
            </div>
        </div>
    );
}

export default Menu;
