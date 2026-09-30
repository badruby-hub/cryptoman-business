"use client";
import Link from "next/link"
import classes from "./main.module.css"
import useReveal from "@/app/utils/useReveal"
import OfficeMap from "./Map"

// Карточки контактов. Цвет полоски задаётся классом из main.module.css
const cards = [
    {
        title: "Telegram-канал",
        text: "Новости и актуальные курсы",
        label: "@cryptoman_armenia",
        href: "https://t.me/cryptoman_armenia",
        line: classes.line__neon,
    },
    {
        title: "Поддержка",
        text: "Ответим на любой вопрос",
        label: "@Cryptoman_supports",
        href: "https://t.me/Cryptoman_supports",
        line: classes.line__neon__two,
    },
    {
        title: "Телефон",
        text: "Звоните в рабочее время",
        label: "+374 11 755 777",
        href: "tel:+37411755777",
        line: classes.line__neon__three,
    },
    {
        title: "Телефон",
        text: "Второй рабочий номер",
        label: "+374 41 755 777",
        href: "tel:+37441755777",
        line: classes.line__neon__four,
    },
]

export default function Main() {
    useReveal();

    return<main className={classes.main}>
        {/* ----- Заголовок ----- */}
        <section className={classes.section__one}>
            <div>
                <p className={classes.overline} data-reveal>Связь с нами</p>
                <h1 className={classes.zagolovok} data-reveal style={{ "--delay": "80ms" } as React.CSSProperties}>
                    Контакты
                </h1>
            </div>
            <div className={`${classes.block__text}`} data-reveal="right" style={{ "--delay": "160ms" } as React.CSSProperties}>
                <p>
                    Ваш надежный партнер для финансовых операций — CRYPTOMAN предлагает
                    безопасный и быстрый обмен криптовалют с нулевыми комиссиями.
                </p>
            </div>
        </section>

        {/* ----- Карточки ----- */}
        <section className={classes.section__two}>
            {cards.map((card, i) => (
                <Link
                    key={card.href}
                    href={card.href}
                    className={classes.card}
                    data-reveal
                    style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}
                >
                    <div className={card.line}></div>
                    <span className={classes.card__title}>{card.title}</span>
                    <span className={classes.card__text}>{card.text}</span>
                    <span className={classes.card__label}>
                        {card.label}
                        <span className={classes.card__arrow} aria-hidden="true">↗</span>
                    </span>
                </Link>
            ))}
        </section>

        {/* ----- Адрес и карта ----- */}
        <section className={classes.section__three}>
            <div className={classes.block__address} data-reveal="left">
                <p className={classes.overline}>Офис</p>
                <p className={classes.address__text}>Республика Чечня, Малгобекская улица, 19</p>
                <ul className={classes.address__list}>
                    <li><span>Режим работы</span>Ежедневно, 10:00 – 00:00 МСК</li>
                    <li><span>Комиссия</span>0% на обмен USDT</li>
                </ul>
                <div className={classes.btn__exchange}>
                    <Link className={`${classes.link} ${classes.btn__for__exchange__two}`} href="https://t.me/Cryptoman_supports">Обменять</Link>
                </div>
            </div>
            <div className={classes.block__map} data-reveal="zoom" style={{ "--delay": "120ms" } as React.CSSProperties}>
                <OfficeMap />
            </div>
        </section>
    </main>
}
