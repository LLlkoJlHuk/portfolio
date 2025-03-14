import Main from "../pages/Main/";
import Projects from "../pages/Projects/";
import Skills from "../pages/Skills/";
import Contacts from "../pages/Contacts/";

const routes = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/skills",
        element: <Skills />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    }
];

export default routes;
