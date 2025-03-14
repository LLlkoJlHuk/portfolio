import {useContext} from "react";
import SocialBlock from "@/components/SocialBlock/index.jsx";
import ArrowPageNavigation from "@/components/ArrowPageNavigation/index.jsx";
import dictionary from "@/constants/dictionary.jsx";
import SettingsContext from "../../context/settings.js";
import styles from './index.module.css'

function Main() {
    const settings = useContext(SettingsContext).settings;

    return <div className={styles["page--main"]}>
        <SocialBlock />
        <ArrowPageNavigation link="/projects" direction="right" description={dictionary.pageMainBtnTxt[settings.lang]}/>

        <div className={styles["main-content"]}>
            <h1>
                {dictionary.pageMainInfoTxt[settings.lang]}
            </h1>

            <a href="/projects" className={`${styles["btn--custom"]} btn--custom`}>{dictionary.pageMainBtnTxt[settings.lang]}</a>
        </div>
    </div>
}

export default Main;