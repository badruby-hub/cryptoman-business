"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BurgerMenu from "../Burger-Menu/Burger-btn";
import  classes  from "./header.module.css";
import Link from "next/link"
import MenuList from "../Burger-Menu/Burger-list";
import Logo from "../Logo/Logo";


export default function Header() {
    const [active, setActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // На широком экране бургер не нужен — закрываем меню
        const handleResize = () => {
            if (window.innerWidth > 850) {
                setActive(false);
            }
        };
        // Когда страницу прокрутили — у шапки появляется тень
        const handleScroll = () => setScrolled(window.scrollY > 10);

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Вызываем сразу при монтировании, чтобы скрыть бургер если нужно
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Пока открыто бургер-меню — страница под ним не скроллится
    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [active]);

    const isActive = (href: string) => (pathname === href ? classes.link__active : "");

    return<header className={`${classes.header} ${scrolled ? classes.header__scrolled : ""}`}>
       <nav className={classes.nav}>
        <div className={classes.block__logo}><Link className={`${classes.link} ${classes.logo}`} href="/">
            <Logo spin className={classes.logo__name}/>
            </Link></div>
        <ul className={classes.ul}>
            <li className={classes.li}><Link className={`${classes.link} ${classes.nav__link} ${isActive("/information")}`} href="/information">Информация</Link></li>
            <li className={classes.li}><Link className={`${classes.link} ${classes.nav__link} ${isActive("/contacts")}`} href="/contacts">Контакты</Link></li>
        </ul>
        <div className={classes.block__btn}><Link className={`${classes.link} ${classes.btn__for__exchange}`} href="https://t.me/Cryptoman_supports">Обменять</Link></div>
          <BurgerMenu active={active} setActive={setActive}/>
          <MenuList active={active} setActive={setActive}/>
      </nav>
    </header>
}
