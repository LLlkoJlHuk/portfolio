import {useContext} from "react";
import dictionary from "@/constants/dictionary.jsx";
import SettingsContext from "@/context/settings.js";
import styles from './index.module.css'

function Footer() {
    const settings = useContext(SettingsContext).settings;

    return <div className={styles["footer"]}>
        <h3 className={styles["footer--head"]}>{dictionary.footerHead[settings.lang]}</h3>
        <p>{dictionary.footerMailTxt[settings.lang]}<a href="mailto:overkot12@gmail.com" target="_blank">Email</a></p>
        <p>{dictionary.footerTelegramTxt[settings.lang]}<a href="https://t.me/overkot12" target="_blank">Telegram</a></p>
    </div>
}

export default Footer;