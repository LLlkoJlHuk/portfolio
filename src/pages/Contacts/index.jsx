import {useContext} from "react";
import ArrowPageNavigation from "@/components/ArrowPageNavigation/index.jsx";
import RequestForm from "@/components/RequestForm/index.jsx";
import ContactsBlock from "@/components/ContactsBlock/index.jsx";
import dictionary from "@/constants/dictionary.jsx";
import SettingsContext from "@/context/settings.js";
import styles from './index.module.css'
import Footer from "@/components/Footer/index.jsx";

function Contacts() {
    const settings = useContext(SettingsContext).settings;

    return <div className={`page ${styles["page--contacts"]}`}>
        <ArrowPageNavigation link="/skills" direction="left" description={dictionary.skillsPage[settings.lang]}/>

        <div className="page-content">
            <div className="bg-header">{dictionary.pageContactsBgHeader[settings.lang]}</div>

            <div className="page-header">
                {dictionary.pageContactsHeader[settings.lang]}
            </div>

            <p className={styles["subhead"]}>
                {dictionary.pageContactsSubhead[settings.lang]}
            </p>

            <RequestForm />

            <p className={styles["contact-me"]}>
                {dictionary.pageContactsContactMe[settings.lang]}
            </p>

            <ContactsBlock />
        </div>

        <Footer />
    </div>
}

export default Contacts;