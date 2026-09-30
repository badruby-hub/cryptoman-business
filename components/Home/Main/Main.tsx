"use client";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import classes from "./main.module.css";
import Loader from "@/components/Loader/Loader";
import Logo from "@/components/Logo/Logo";

const SUPPORT = "https://t.me/Cryptoman_supports";
const CHANNEL = "https://t.me/cryptoman_armenia";

// Карточки «Почему CRYPTOMAN»
const features = [
  { icon: "Vector.png", title: "Обмен", lines: ["Мгновенный обмен", "Работаем с 10:00 до 00:00 по МСК"] },
  { icon: "transaction.png", title: "Сделки", lines: ["500+ сделок в день", "Обмен USDT без комиссии"] },
  { icon: "wallet.png", title: "Рынок", lines: ["Лучший курс на рынке", "Самый низкий курс на покупку USDT"] },
];

// Появление блоков: сверху вниз по очереди
const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Main() {
  // Курс из /api/well-rate пока отключён — вместо чисел показываем Loader.
  // Вернуть: useState для buy/sell + fetch("/api/well-rate") в useEffect.
  return (
    <main className={classes.main}>
      {/* ----- Первый экран ----- */}
      <motion.section className={classes.hero} variants={list} initial="hidden" animate="show">
        <motion.p className={classes.eyebrow} variants={item}>Обменник USDT · TRC-20</motion.p>
        <motion.h1 className={classes.title} variants={item}>
          <Logo /> <span>ускорит ваш бизнес</span>
        </motion.h1>
        <motion.p className={classes.subtitle} variants={item}>
          Быстрый и безопасный обмен криптовалюты без комиссии
        </motion.p>

        <motion.div className={classes.btns} variants={item}>
          <Link className={`${classes.btn} ${classes.btn__primary}`} href={SUPPORT}>
            Купить / Продать USDT
          </Link>
          <Link className={`${classes.btn} ${classes.btn__ghost}`} href={CHANNEL}>
            Telegram-канал
          </Link>
        </motion.div>

        {/* Курс */}
        <motion.ul className={classes.rate} variants={item}>
          <li className={classes.rate__coin}>
            <span className={classes.dollar}>$</span>
            <span>
              <span className={classes.rate__value}>USDT</span>
              <span className={classes.rate__label}>TRC-20</span>
            </span>
          </li>
          <li className={classes.rate__cell}>
            <span className={classes.rate__label}>Покупка</span>
            <span className={classes.rate__value}><Loader /></span>
          </li>
          <li className={classes.rate__cell}>
            <span className={classes.rate__label}>Продажа</span>
            <span className={classes.rate__value}><Loader /></span>
          </li>
        </motion.ul>
      </motion.section>

      {/* ----- Почему CRYPTOMAN ----- */}
      <section className={classes.features}>
        <motion.h2
          className={classes.section__title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Почему <Logo />?
        </motion.h2>

        <motion.ul
          className={classes.cards}
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((f) => (
            <motion.li
              key={f.title}
              className={classes.card}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className={classes.card__icon}>
                <img src={f.icon} alt="" />
              </span>
              <div>
                <h3 className={classes.card__title}>{f.title}</h3>
                {f.lines.map((line) => (
                  <p key={line} className={classes.card__text}>{line}</p>
                ))}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* ----- Призыв к действию ----- */}
      <motion.section
        className={classes.cta}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className={classes.cta__title}><Logo /></h2>
        <p className={classes.cta__text}>
          Ваш выбор для безопасного и выгодного обмена криптовалюты. Сделаем ваши
          транзакции простыми и надёжными.
        </p>
        <div className={classes.btns}>
          <Link className={`${classes.btn} ${classes.btn__primary}`} href={SUPPORT}>
            Обменять
          </Link>
          <Link className={`${classes.btn} ${classes.btn__ghost}`} href="/contacts">
            Контакты
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
