import styles from './index.module.css'
import Linkedin from "@/assets/images/linkedin.svg";
import Telegram from "@/assets/images/telegram.svg";
import Instagram from "@/assets/images/instagram.svg";
import Whatsapp from "@/assets/images/whatsapp.svg";

function SocialBlock() {

    return <div className={styles["social-block"]}>
        <a href="https://www.linkedin.com/in/konstantin-chernyaev-50b58124a/" className={styles["linkedin"]} target="_blank">
            <img src={Linkedin} alt="Vk" />
        </a>
        <a href="https://t.me/overkot12" className={styles["telegram"]} target="_blank">
            <img src={Telegram} alt="Telegram" />
        </a>
        <a href="https://wa.me/+79954403414" className={styles["instagram"]} target="_blank">
            <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://www.instagram.com/lllkojlhuk/" className={styles["whatsapp"]} target="_blank">
            <img src={Whatsapp} alt="Whatsapp" />
        </a>
    </div>
}

export default SocialBlock;