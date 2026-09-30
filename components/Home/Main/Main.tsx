"use client";
import Link from "next/link";
import classes from "./main.module.css";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import useReveal from "@/app/utils/useReveal";
import Logo from "@/components/Logo/Logo";

const d = (ms: number) => ({ "--delay": `${ms}ms` } as React.CSSProperties);

export default function Main() {
  useReveal();
  // const [buy, setBuy] = useState<string | null>(null);
  // const [sell, setSell] = useState<string | null>(null);
  // useEffect(() => {
  //   const fetchWell = async () => {
  //     try {
  //       const res = await fetch("/api/well-rate");
  //       const data = await res.json();
  //       const apiBuy = parseFloat(data?.sell);
  //       const apiSell = parseFloat(data?.buy);
  //       setBuy((apiBuy + 0.4).toFixed(2));
  //       setSell(apiSell.toFixed(2));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchWell();
  // }, []);
  return (
    <main className={classes.main}>
      <section className={classes.container__one}>
        <h1 className={classes.h1} data-reveal><Logo /> ускорит ваш бизнес</h1>
        <h3 className={classes.h3} data-reveal style={d(100)}>Лучший обменник</h3>
        <div className={classes.block__btn} data-reveal="zoom" style={d(200)}>
          <Link
            className={`${classes.link} ${classes.btn__for__exchange__one}`}
            href="https://t.me/Cryptoman_supports"
          >
            Купить / Продать USDT
          </Link>
        </div>
        <ul className={classes.container__course} data-reveal style={d(300)}>
          <li className={`${classes.course} ${classes.block__dollar__trc}`}>
            <p className={` ${classes.dollar}`}>$</p>
            <div>
              <p
                className={`${classes.first__paragraph} ${classes.trc__paragraph}`}
              >
                TRC 20
              </p>
              <p
                className={`${classes.second__paragraph} ${classes.usdt__paragraph}`}
              >
                USDT
              </p>
            </div>
          </li>
          {/* <li className={classes.course}>
            <p className={classes.first__paragraph}>Change</p>
            <p className={classes.second__paragraph}>+14.04%</p>
        </li> */}
          <li className={classes.course}>
            <p className={classes.first__paragraph}>Покупка</p>
            <p className={classes.second__paragraph}><Loader/></p>
          </li>
          <li className={classes.course}>
            <p className={classes.first__paragraph}>Продажа</p>
            <p className={classes.second__paragraph}><Loader/></p>
          </li>
          {/* <li className={classes.course}>
            <p className={classes.first__paragraph}>Диаграмма</p>
            <p className={classes.second__paragraph}></p>
        </li> */}
        </ul>
      </section>
      <section className={classes.container__two}>
        <h1 className={classes.h1__two} data-reveal>Почему <Logo /> ?</h1>

        <article className={classes.block__card}>
          <article className={`${classes.card__exchange} ${classes.card}`} data-reveal style={d(0)}>
            <div className={classes.block__img}>
              <img src="Vector.png" alt="" />
            </div>
            <h4 className={`${classes.zagolovok__card}`}>Обмен</h4>
            <div className={classes.block__text__card}>
              <p className={classes.text__card}>Мгновенный обмен</p>
              <p className={classes.text__card}>
                Работаем с 10:00 до 00:00 по МСК
              </p>
            </div>
          </article>
          <article className={`${classes.card__transactions} ${classes.card}`} data-reveal style={d(120)}>
            <div className={classes.block__img}>
              <img src="transaction.png" alt="" />
            </div>
            <h4 className={`${classes.zagolovok__card}`}>Сделки</h4>
            <div className={classes.block__text__card}>
              <p className={classes.text__card}>500+ сделок в день</p>
              <p className={classes.text__card}>Обмен USDT без комиссии</p>
            </div>
          </article>
          <article className={`${classes.card__market} ${classes.card}`} data-reveal style={d(240)}>
            <div className={classes.block__img}>
              <img src="wallet.png" alt="" />
            </div>
            <h4 className={`${classes.zagolovok__card}`}>Рынок</h4>
            <div className={classes.block__text__card}>
              <p className={classes.text__card}>Лучший курс на рынке</p>
              <p className={classes.text__card}>
                Самый низкий курс на покупку USDT
              </p>
            </div>
          </article>
        </article>
        <article className={classes.container_info_bot_and_news}>
          <article className={classes.block__info__text} data-reveal="zoom">
            <h2 className={classes.zagolovok__brand}><Logo /></h2>
            <div>
              <p className={classes.text__block__info}>
                Ваш выбор для безопасного и выгодного обмена криптовалюты. Мы
                здесь, чтобы сделать ваши транзакции простыми и надёжными.
              </p>
            </div>
            <div className={classes.block__btn}>
              <Link
                className={`${classes.link} ${classes.btn__for__exchange__two}`}
                href="https://t.me/Cryptoman_supports"
              >
                Обменять
              </Link>
            </div>
          </article>
          {/* <div className={classes.line__block}></div> линия между блоков 
          <article className={classes.block__info__text__news}>
            <h2 className={classes.zagolovok__brand}>НОВОСТИ</h2>
            <div>
              <p className={`${classes.text__block__info} ${classes.text__block__info__news}`}>
                Официальный телеграм канал обменного офиса CRYPTOMAN — обмен без
                комиссий, новости локальных рынков, главные события индустрии!
              </p>
            </div>
            <div className={classes.block__btn}>
              <Link
                className={`${classes.link} ${classes.btn__for__exchange__two}`}
                href="https://t.me/cryptoman_armenia">
                Подписаться
              </Link>
            </div>
          </article> */}
        </article>
      </section>
    </main>
  );
}
