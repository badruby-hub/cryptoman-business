"use client";
import Link from "next/link";
import classes from "./main.module.css"
import useReveal from "@/app/utils/useReveal";

// Цели компании: заголовок + описание
const goals = [
  {
    title: "Безопасность и прозрачность",
    text: "Обеспечить максимально возможный уровень безопасности для всех наших пользователей, используя передовые технологии и строгие меры защиты.",
  },
  {
    title: "Инновации и технологии",
    text: "Постоянно внедрять новейшие технологии и инновационные решения для улучшения пользовательского опыта и эффективности торговых операций.",
  },
  {
    title: "Обучение и поддержка",
    text: "Предоставлять образовательные ресурсы и профессиональную поддержку для всех уровней трейдеров, способствуя их развитию и успеху.",
  },
  {
    title: "Доступность и удобство",
    text: "Стараться сделать наши услуги максимально доступными и удобными для всех пользователей, независимо от их опыта и уровня знаний.",
  },
  {
    title: "Сообщество и партнерство",
    text: "Создавать и поддерживать крепкие связи с нашими пользователями и партнерами, развивая взаимовыгодное сотрудничество.",
  },
];

// Цифры под заголовком
const stats = [
  { value: "2022", label: "год основания" },
  { value: "500+", label: "сделок в день" },
  { value: "0%", label: "комиссия на USDT" },
];

export default function Main() {
    useReveal();

    return<main className={classes.main}>
      {/* ----- Первый экран ----- */}
      <section className={classes.hero}>
        <h4 className={classes.zagolovok__info} data-reveal>
          Информация
        </h4>
        <h1 className={classes.hero__title} data-reveal style={{ "--delay": "80ms" } as React.CSSProperties}>
          Надёжный обмен криптовалюты <span className={classes.accent}>с 2022 года</span>
        </h1>
        <ul className={classes.stats}>
          {stats.map((s, i) => (
            <li key={s.label} className={classes.stat} data-reveal="zoom" style={{ "--delay": `${160 + i * 90}ms` } as React.CSSProperties}>
              <span className={classes.stat__value}>{s.value}</span>
              <span className={classes.stat__label}>{s.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ----- О нас ----- */}
      <section className={`${classes.section} ${classes.section__one}`}>
        <h2 className={`${classes.zagolovok__block}`} data-reveal="left">
            <span className={classes.number}>01</span>
            О нас
        </h2>
        <div className={`${classes.block__text}`} data-reveal="right">
            <p>
                CRYPTOMAN была основана в 2022 году группой энтузиастов финансового рынка
                с целью создать инновационный и надежный обменный пункт криптовалют,
                способный удовлетворить потребности как начинающих трейдеров, так и профессионалов.
            </p>
            <p>
                За годы своего существования CRYPTOMAN зарекомендовала себя как одна из самых
                надежных и прозрачных бирж, предоставляющая широкий спектр финансовых
                инструментов и высококачественный сервис.
            </p>
        </div>
      </section>

      {/* ----- Миссия ----- */}
      <section className={`${classes.section} ${classes.section__two}`}>
        <h2 className={`${classes.zagolovok__block}`} data-reveal="left">
            <span className={classes.number}>02</span>
            Миссия
        </h2>
        <div className={`${classes.block__text}`} data-reveal="right">
            <blockquote className={classes.quote}>
                Создать доступные и безопасные условия для торговли на финансовых рынках.
            </blockquote>
            <p>
                Мы способствуем финансовой грамотности и поддерживаем развитие инвестиционной культуры.
                Мы стремимся сделать финансовые рынки более доступными для всех,
                обеспечивая при этом высокий уровень безопасности и надежности.
            </p>
        </div>
      </section>

      {/* ----- Цели ----- */}
      <section className={`${classes.section} ${classes.section__three}`}>
        <h2 className={`${classes.zagolovok__block}`} data-reveal="left">
            <span className={classes.number}>03</span>
            Цели
        </h2>
        <ol className={classes.ol}>
          {goals.map((goal, i) => (
            <li key={goal.title} className={`${classes.li}`} data-reveal style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}>
              <span className={classes.li__number}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={classes.li__title}>{goal.title}</h3>
              <p className={classes.li__text}>{goal.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ----- Призыв к действию ----- */}
      <section className={classes.cta} data-reveal="zoom">
        <h2 className={classes.cta__title}>Готовы начать?</h2>
        <p className={classes.cta__text}>Обменяйте USDT быстро и без комиссии через нашего Telegram-бота.</p>
        <div className={classes.cta__btns}>
          <Link className={`${classes.btn} ${classes.btn__primary}`} href="https://t.me/Cryptoman_supports">Обменять</Link>
          <Link className={`${classes.btn} ${classes.btn__ghost}`} href="/contacts">Контакты</Link>
        </div>
      </section>
    </main>
}
