import Link from "next/link";
import classes from "./legal.module.css";
import type { LegalDocument } from "./content/types";

// Общий шаблон для юридических страниц.
// Сам текст лежит в components/Legal/content/*.ts — правь его там.

const documents = [
  { href: "/terms", label: "Пользовательское соглашение" },
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/aml", label: "Политика AML" },
];

export default function Legal({ doc, current }: { doc: LegalDocument; current: string }) {
  return (
    <main className={classes.main}>
      {/* ----- Заголовок ----- */}
      <header className={classes.hero}>
        <p className={classes.overline}>Документы</p>
        <h1 className={classes.title}>{doc.title}</h1>
        <p className={classes.updated}>Редакция от {doc.updated}</p>
        <p className={classes.intro}>{doc.intro}</p>
      </header>

      <div className={classes.layout}>
        {/* ----- Оглавление (на ПК прилипает сбоку) ----- */}
        <aside className={classes.aside}>
          <nav className={classes.toc} aria-label="Содержание">
            <p className={classes.toc__title}>Содержание</p>
            <ol className={classes.toc__list}>
              {doc.sections.map((s, i) => (
                <li key={s.id}>
                  <a className={classes.toc__link} href={`#${s.id}`}>
                    <span className={classes.toc__num}>{i + 1}.</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <nav className={classes.docs} aria-label="Другие документы">
            {documents.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className={`${classes.docs__link} ${d.href === current ? classes.docs__link__active : ""}`}
              >
                {d.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* ----- Текст документа ----- */}
        <article className={classes.content}>
          {doc.sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className={classes.section}
              style={{ "--i": i } as React.CSSProperties}
            >
              <h2 className={classes.section__title}>
                <span className={classes.section__num}>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.paragraphs?.map((p, j) => (
                <p key={j} className={classes.paragraph}>{p}</p>
              ))}
              {s.list && (
                <ul className={classes.list}>
                  {s.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className={classes.contact}>
            <p>
              Остались вопросы по документу? Напишите нам:{" "}
              <a href="mailto:groztex@yandex.ru">groztex@yandex.ru</a> или{" "}
              <a href="https://t.me/GROZTEX">@GROZTEX_Support</a>
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
