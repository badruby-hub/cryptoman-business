"use client";

import classes from "./burger.module.css";

// Кнопка-бургер: три полоски, которые превращаются в крестик, когда меню открыто
export default function BurgerMenu({active, setActive}:{active:boolean; setActive:(v:boolean) => void}) {
    return <button
        type="button"
        onClick={()=> setActive(!active)}
        className={`${classes.header__burger__btn} ${active ? classes.burger__active : ""}`}
        aria-label={active ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={active}
    >
        <span></span>
        <span></span>
        <span></span>
    </button>
}
