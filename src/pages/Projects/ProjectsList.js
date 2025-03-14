import ProjectImg from "../../assets/images/project.jpg"

const ProjectsList = [
    {
        id: 0,
        name: 'Vivanti EU',
        link: 'https://vivanti.eu',
        preview: ProjectImg,
        description: {
            ru: 'Диджитал-агентство, предлагающее услуги на стыке фармацевтического маркетинга, медицины и цифровых технологий',
            en: 'A digital agency offering services at the intersection of pharmaceutical marketing, medicine and digital technologies'
        }
    },

    {
        id: 1,
        name: 'Vivanti RU',
        link: 'https://vivanti.ru',
        preview: ProjectImg,
        description: {
            ru: 'Диджитал-агентство, предоставляющее цифровой маркетинг и креативные решения для компаний сферы здравоохранения',
            en: 'A digital agency providing digital marketing and creative solutions for healthcare companies'
        }
    },

    {
        id: 2,
        name: 'Esculap',
        link: 'https://antacidynapervom.esculap-med.ru/post/module1',
        preview: ProjectImg,
        description: {
            ru: 'Специализированный ресурс, обеспечивающих доступ к профессиональному медицинскому контенту, обеспечивающий повышение культуры дистанционного обучения врачей и качества медицинской помощи',
            en: 'A specialized resource providing access to professional medical content, ensuring an increase in the culture of distance learning for doctors and the quality of medical care'
        }
    },

    {
        id: 3,
        name: 'Docsfera',
        link: 'https://docsfera.ru/',
        preview: ProjectImg,
        description: {
            ru: 'Медицинский ресурс для специалистов здравоохранения, на котором публикуются медицинские новости, исследования, статьи и клинические случаи, проводятся вебинары и трансляции, а также интерактивные инструменты для повседневной практики врача',
            en: 'A medical resource for healthcare professionals that publishes medical news, research, articles and clinical cases, hosts webinars and broadcasts, as well as interactive tools for daily physician practice'
        }
    },

    {
        id: 4,
        name: 'Mails Helper',
        link: 'https://mail.apps.vivanti.ru',
        preview: ProjectImg,
        description: {
            ru: 'Информационный ресурс, помогающий разработчикам ускорять процесс разработки и редактирования Email писем',
            en: 'An information resource that helps developers speed up the process of developing and editing Email letters'
        }
    },
]

export default ProjectsList;