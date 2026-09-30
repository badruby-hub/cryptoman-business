"use client";

import { useEffect, useRef, useState } from "react";
import classes from "./sidebare.module.css";

// Список соцсетей в боковом меню. Чтобы добавить новую — просто добавь объект.
const links = [
  {
    href: "https://t.me/groztex_news_groz",
    icon: "/telegram-icon/icon-tg-96.png",
    alt: "icon-telegram",
    label: "Telegram",
  },
  {
    href: "https://chat.whatsapp.com/I0PLZZCBFaG2ytel0YtwMf",
    icon: "/whatsApp-icon/icon-whatsapp-96.png",
    alt: "icon-whatsapp",
    label: "WhatsApp",
  },
];

export default function RightMenu() {
  const [active, setActive] = useState(false);
  const asideRef = useRef<HTMLElement>(null);

  // Закрываем меню по Esc и по клику вне него
  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(false);
    const onClick = (e: MouseEvent) => {
      if (asideRef.current && !asideRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [active]);

  return (
    <aside ref={asideRef} className={`${classes.aside} ${active ? classes.aside__open : ""}`}>
      <ul className={`${classes.ul} ${active ? classes.visible : classes.hidden}`}>
        {links.map((link, i) => (
          <li key={link.href} style={{ "--i": i } as React.CSSProperties}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" tabIndex={active ? 0 : -1}>
              <div className={classes.block__img}>
                <img src={link.icon} alt={link.alt} />
              </div>
              <p>{link.label}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className={classes.ul__btn__open}>
        <button
          type="button"
          onClick={() => setActive(!active)}
          className={`${classes.btn__open} ${active ? classes.btn__open__active : ""}`}
          aria-label={active ? "Закрыть меню соцсетей" : "Открыть меню соцсетей"}
          aria-expanded={active}
        >
          <span className={classes.pulse}></span>
          {/* иконка «сообщение» */}
          <svg className={classes.icon__chat} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.4A.5.5 0 0 1 5 19v-3h-.5A.5.5 0 0 1 4 15.5v-10Z"
              fill="currentColor"
            />
            <circle cx="8.5" cy="9.5" r="1.2" fill="#00665c" />
            <circle cx="12" cy="9.5" r="1.2" fill="#00665c" />
            <circle cx="15.5" cy="9.5" r="1.2" fill="#00665c" />
          </svg>
          {/* иконка «крестик» */}
          <span className={classes.btn__close}>
            <span className={classes.line__one}></span>
            <span className={classes.line__two}></span>
          </span>
        </button>
      </div>
    </aside>
  );
}
