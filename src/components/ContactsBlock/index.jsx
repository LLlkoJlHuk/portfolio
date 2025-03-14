import styles from './index.module.css'
import Linkedin from "@/assets/images/linkedin-2.svg";
import Telegram from "@/assets/images/telegram.svg";
import Whatsapp from "@/assets/images/whatsapp.svg";
import Gmail from "@/assets/images/gmail.svg";

function ContactsBlock() {
    return <div className={styles["contacts--block"]}>
        <a href="https://www.linkedin.com/in/konstantin-chernyaev-50b58124a/" target="_blank" className={styles["linkedin"]}>
            <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="https://t.me/overkot12" target="_blank" className={styles["telegram"]}>
            <img src={Telegram} alt="telegram" />
                Telegram
        </a>
        <a href="https://wa.me/+79954403414" target="_blank" className={styles["whatsapp"]}>
            <img src={Whatsapp} alt="whatsapp" />
                WhatsApp
        </a>
        <a href="mailto:overkot12@gmail.com" target="_blank" className={styles["gmail"]}>
            <img src={Gmail} alt="gmail" />
        </a>
    </div>
}

export default ContactsBlock;