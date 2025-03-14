import styles from './index.module.css'
import Arrow from '../../assets/images/arrow.svg'

function ArrowPageNavigation({ link="#", direction="left", description }) {
    let directionIsLeft = true;

    if (direction === 'right') {
        directionIsLeft = false;
    }

    return <a href={link} className={`${styles["arrow-page-navigation"]} ${directionIsLeft ? styles["arr-left"] : styles["arr-right"]}`}>
        <p className={styles["page-desc"]}>{description}</p>
        <img src={Arrow} alt="arrow" />
    </a>
}

export default ArrowPageNavigation;