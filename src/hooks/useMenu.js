import { useState, useRef } from "react";
import styles from "../components/Menu/index.module.css";

export function useMenu() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const menu = useRef();
    const isAnimating = useRef(false);

    function toggleMenu() {
        if (isAnimating.current) return;
        isAnimating.current = true;

        setMenuIsOpen((prevState) => {
            const newState = !prevState;
            if (newState) {
                openMenu();
            } else {
                closeMenu();
            }
            return newState;
        });
    }

    function openMenu() {
        if (!menu.current) return;

        menu.current.classList.add(styles["visible"]);
        let animation = menu.current.animate(
            [
                { opacity: 0, height: 0 },
                { opacity: 1, height: "100%" }
            ],
            { duration: 500 }
        );

        animation.addEventListener("finish", () => {
            isAnimating.current = false;
        });
    }

    function closeMenu() {
        if (!menu.current) return;

        let animCloseDiv = menu.current.animate(
            [
                { opacity: 1, height: "100%" },
                { opacity: 0, height: 0 }
            ],
            { duration: 500 }
        );

        animCloseDiv.addEventListener("finish", () => {
            menu.current.classList.remove(styles["visible"]);
            isAnimating.current = false;
        });
    }

    return { menuIsOpen, toggleMenu, menu };
}
