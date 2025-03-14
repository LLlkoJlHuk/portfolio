import {useContext} from "react";
import ArrowPageNavigation from "@/components/ArrowPageNavigation/index.jsx";
import Footer from "@/components/Footer/index.jsx";
import ProjectsList from "@/pages/Projects/ProjectsList.js";
import SettingsContext from "@/context/settings.js";
import dictionary from "@/constants/dictionary.jsx";
import styles from './index.module.css'

function Projects() {
    const settings = useContext(SettingsContext).settings;

    return <div className={`page ${styles["page--projects"]}`}>
        <ArrowPageNavigation link="/" direction="left" description={dictionary.mainPage[settings.lang]}/>
        <ArrowPageNavigation link="/skills" direction="right" description={dictionary.skillsPage[settings.lang]}/>

        <div className="page-content">
            <div className="bg-header">{dictionary.pageProjectsBgHeader[settings.lang]}</div>

            <div className="page-header">
                {dictionary.pageProjectsHeader[settings.lang]}
            </div>

            <div className={styles["project-list"]}>
                {
                    ProjectsList.map(project => {
                        return <a href={project.link} className={styles["project"]} target="_blank" key={project.id}>
                            <img src={project.preview} className={styles["project--preview"]} alt="preview"/>

                            <div className={styles["project--info"]}>
                                <div className={styles["project--title"]}>
                                    {project.name}
                                </div>

                                <div className={styles["project--desc"]}>
                                    {project.description[settings.lang]}
                                </div>
                            </div>
                        </a>
                    })
                }
            </div>

        </div>

        <Footer />
    </div>
}

export default Projects;