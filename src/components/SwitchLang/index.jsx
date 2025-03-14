import { useState } from "react";
import styles from "./index.module.css";

const SwitchLang = ({ checked = false, onChange }) => {
    const [isOn, setIsOn] = useState(checked);

    const toggle = () => {
        const newState = !isOn;
        setIsOn(newState);
        if (onChange) {
            onChange(newState);
        }
    };

    return (
        <button onClick={toggle} className={`${styles.switch} ${isOn ? styles.on : styles.off}`}>
            <span className={`${styles.label} ${isOn ? styles.labelOn : styles.labelOff}`}>
                {isOn ? "ru" : "en"}
            </span>
            <span className={`${styles.toggle} ${isOn ? styles.translate : ""}`} />
        </button>
    );
};

export default SwitchLang;
