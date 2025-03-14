import {useContext} from "react";
import Footer from "@/components/Footer/index.jsx";
import dictionary from "@/constants/dictionary.jsx";
import SettingsContext from "@/context/settings.js";
import SkillSet from "@/pages/Skills/SkillSet.js";
import Photo from "../../assets/images/my_photo.png"
import styles from './index.module.css'
import SfuLogo from "../../assets/images/sfu-logo.png"
import LimaLabLogo from "../../assets/images/limalab-logo.png"
import VivantiLogo from "../../assets/images/vivanti-logo.png"
import ArrowPageNavigation from "@/components/ArrowPageNavigation/index.jsx";

function Skills() {
    const settings = useContext(SettingsContext).settings;
    const skills = SkillSet;

    return <div className={`page ${styles["page--skills"]}`}>
        <ArrowPageNavigation link="/projects" direction="left" description={dictionary.projectsPage[settings.lang]}/>
        <ArrowPageNavigation link="/contacts" direction="right" description={dictionary.contactsPage[settings.lang]}/>

        <div className="page-content">
            <div className="bg-header">{dictionary.pageSkillsBgHeader[settings.lang]}</div>

            <div className="page-header">
                {dictionary.pageSkillsHeader[settings.lang]}
            </div>

            <div className={styles["about-me"]}>
                <img src={Photo} className={styles["photo"]} alt="photo" />

                <div className={styles["description"]}>
                    <div className={styles["subhead"]}>
                        {dictionary.pageSkillsTxtInfoHead[settings.lang]}
                    </div>

                    <p>
                        {dictionary.pageSkillsTxtInfo[settings.lang]}
                    </p>
                    <p>
                        {dictionary.pageSkillsTxtInfoAboutMe[settings.lang]}
                    </p>
                </div>
            </div>

            <div className={styles["skills-set"]}>
                {
                    skills.map(skillItem => {
                        return (
                            <div className={styles["skill"]} key={skillItem.id}>
                                <div
                                    className={`${styles["skill--progress"]} ${skillItem.progress < 33 ? styles["lvl--1"] : skillItem.progress < 66 ? styles["lvl--2"] : styles["lvl--3"]}`}
                                    style={{ width: `${skillItem.progress}%` }}>
                                </div>

                                <div className={styles["skill--head"]}>
                                    <p>{ skillItem.name }</p>
                                </div>

                                <div className={styles["skill--percent"]}>
                                    <p>{ skillItem.progress }%</p>
                                </div>
                            </div>
                        );
                    })
                }


                <div className={styles["skill--desc"]}>
                    <div>{dictionary.pageSkillsDescLevelBase[settings.lang]}</div>
                    <div>{dictionary.pageSkillsDescLevelMiddle[settings.lang]}</div>
                    <div>{dictionary.pageSkillsDescLevelAdvanced[settings.lang]}</div>
                </div>
            </div>

            <div className="content-header">
                {dictionary.pageSkillsExperienceHead[settings.lang]}
            </div>

            <div className={styles["experience"]}>
                <div className={styles["experience--item"]}>
                    <div className={styles["experience--item--logo"]}>
                        <img src={VivantiLogo} alt="Logo"/>
                    </div>
                    <div className={styles["experience--item--desc"]}>
                        <div className={styles["experience--item--name"]}>{dictionary.pageSkillsTxtInfoAboutExperienceSecondName[settings.lang]}</div>
                        <div className={styles["experience--item--post"]}>{dictionary.pageSkillsTxtInfoAboutExperienceSecondPost[settings.lang]}</div>
                        <div className={styles["experience--item--dates"]}>{dictionary.pageSkillsTxtInfoAboutExperienceSecondDates[settings.lang]}</div>
                        <div className={styles["experience--item--job-description"]}>{dictionary.pageSkillsTxtInfoAboutExperienceSecondDescription[settings.lang]}</div>
                    </div>
                </div>

                <div className={styles["experience--item"]}>
                    <div className={styles["experience--item--logo"]}>
                        <img src={LimaLabLogo} alt="Logo"/>
                    </div>
                    <div className={styles["experience--item--desc"]}>
                        <div className={styles["experience--item--name"]}>{dictionary.pageSkillsTxtInfoAboutExperienceFirstName[settings.lang]}</div>
                        <div className={styles["experience--item--post"]}>{dictionary.pageSkillsTxtInfoAboutExperienceFirstPost[settings.lang]}</div>
                        <div className={styles["experience--item--dates"]}>{dictionary.pageSkillsTxtInfoAboutExperienceFirstDates[settings.lang]}</div>
                        <div className={styles["experience--item--job-description"]}>{dictionary.pageSkillsTxtInfoAboutExperienceFirstDescription[settings.lang]}</div>
                    </div>
                </div>
            </div>

            <div className="content-header">
                {dictionary.pageSkillsStudyHead[settings.lang]}
            </div>

            <div className={styles["education"]}>
                <div className={styles["education--item"]}>
                    <div className={styles["education--item--logo"]}>
                        <img src={SfuLogo} alt="Logo"/>
                    </div>
                    <div className={styles["education--item--desc"]}>
                        <div className={styles["education--item--name"]}>{dictionary.pageSkillsTxtInfoAboutStudySecondName[settings.lang]}</div>
                        <div className={styles["education--item--direction"]}>{dictionary.pageSkillsTxtInfoAboutStudySecondDirection[settings.lang]}</div>
                        <div className={styles["education--item--dates"]}>{dictionary.pageSkillsTxtInfoAboutStudySecondDates[settings.lang]}</div>
                    </div>
                </div>

                <div className={styles["education--item"]}>
                    <div className={styles["education--item--logo"]}>
                        <img src={SfuLogo} alt="Logo"/>
                    </div>
                    <div className={styles["education--item--desc"]}>
                        <div className={styles["education--item--name"]}>{dictionary.pageSkillsTxtInfoAboutStudyFirstName[settings.lang]}</div>
                        <div className={styles["education--item--direction"]}>{dictionary.pageSkillsTxtInfoAboutStudyFirstDirection[settings.lang]}</div>
                        <div className={styles["education--item--dates"]}>{dictionary.pageSkillsTxtInfoAboutStudyFirstDates[settings.lang]}</div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}

export default Skills;