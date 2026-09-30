"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./burger.module.css";
import Logo from "../Logo/Logo";

// Пункты навигации
const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/information", label: "Информация" },
  { href: "/contacts", label: "Контакты" },
];

// Контакты внизу меню
const contacts = [
  { href: "https://t.me/GROZTEX_bot", label: "@GROZTEX_bot", note: "Бот для обмена" },
  { href: "https://t.me/groztex_news", label: "Новостной канал", note: "Telegram" },
  { href: "https://chat.whatsapp.com/I0PLZZCBFaG2ytel0YtwMf", label: "Группа в WhatsApp", note: "Чат" },
  { href: "https://t.me/GROZTEX", label: "@GROZTEX_Support", note: "Поддержка" },
  { href: "mailto:groztex@yandex.ru?subject=Запрос%20с%20сайта&body=Здравствуйте", label: "groztex@yandex.ru", note: "Почта" },
];

export default function MenuList({active, setActive}:{active:boolean; setActive:(v:boolean)=>void}) {
  const pathname = usePathname();
  const close = () => setActive(false);

  // Закрытие по клавише Esc
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, setActive]);

  // Порядковый номер элемента — для поочерёдной анимации появления
  let i = 0;
  const delay = () => ({ "--i": i++ } as React.CSSProperties);

  return <>
    {/* затемнение фона, клик по нему закрывает меню */}
    <div className={`${classes.overlay} ${active ? classes.overlay__open : ""}`} onClick={close}></div>

    <section
      className={`${classes.container__list__menu} ${active ? classes.open : classes.closed}`}
      aria-hidden={!active}
      inert={!active}
    >
      <section className={classes.block__link}>
        <div className={classes.block__logo} style={delay()}>
          <Link onClick={close} className={`${classes.link} ${classes.logo}`} href="/"><Logo /></Link>
        </div>

        <ul className={classes.ul}>
          {navLinks.map((link) => (
            <li key={link.href} style={delay()}>
              <Link
                onClick={close}
                href={link.href}
                className={`${classes.link} ${classes.nav__link} ${pathname === link.href ? classes.nav__link__active : ""}`}
              >
                {link.label}
                <span className={classes.arrow} aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={classes.block__btns} style={delay()}>
          <Link onClick={close} className={`${classes.link} ${classes.btn} ${classes.btn__for__exchange}`} href="https://t.me/GROZTEX_bot">Обменять</Link>
          <Link onClick={close} className={`${classes.link} ${classes.btn} ${classes.btn__for__news}`} href="https://t.me/groztex_news">Подписаться</Link>
        </div>

        <article className={classes.block__info__three}>
          <h4 className={classes.contacts__title} style={delay()}>Связаться с нами</h4>
          {contacts.map((c) => (
            <Link key={c.href} onClick={close} className={`${classes.link} ${classes.contact}`} href={c.href} style={delay()}>
              <span className={classes.contact__note}>{c.note}</span>
              <span className={classes.contact__label}>{c.label}</span>
            </Link>
          ))}
        </article>
      </section>
    </section>
  </>
}
