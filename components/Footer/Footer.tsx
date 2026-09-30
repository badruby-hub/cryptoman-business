import Link from "next/link";
import classes from "./footer.module.css";
import Logo from "../Logo/Logo";

export default function Footer() {
    return<footer className={classes.footer}>
      <section className={classes.container__one}>
           <article className={classes.block__info__one}>
            <h3 className={classes.logo}><Logo /></h3>
            <p className={classes.text}>
                Ваш надёжный партнёр для финансовых операций,
                предлагает быстрый безопасный обмен криптовалюты без комиссии.
            </p>
            <div className={classes.block__btn}><Link className={`${classes.link__btn} ${classes.btn__for__exchange__two}`} href="https://t.me/Cryptoman_supports">Обменять USDT</Link></div>
           </article>
           <article className={classes.block__info__two}>
            <h3 className={classes.title}>Информация</h3>
            <p className={classes.btn}><Link className={`${classes.link}`} href="/terms">Пользовательское соглашение</Link></p>
            <p className={classes.btn}><Link className={`${classes.link}`} href="/privacy">Политика конфиденциальности</Link></p>
            <p className={classes.btn}><Link className={`${classes.link}`} href="/aml">Политика по борьбе с отмыванием денег</Link></p>
           </article>
             <article className={classes.block__info__three}>
            <h3 className={classes.title}>Контакты</h3>
            <p className={classes.btn}><Link className={classes.link} href="https://t.me/cryptoman_armenia">Новостной канал</Link></p>
            <p className={classes.btn}><Link className={classes.link} href="https://t.me/Cryptoman_supports">@Cryptoman_supports</Link></p>
            <p className={classes.btn}><a className={classes.link} href="tel:+37411755777">+374 11 755 777</a></p>
            <p className={classes.btn}><a className={classes.link} href="tel:+37441755777">+374 41 755 777</a></p>
           </article>
      </section>
      <p className={classes.copyright}>© {new Date().getFullYear()} CRYPTOMAN. Все права защищены.</p>
          </footer>
}