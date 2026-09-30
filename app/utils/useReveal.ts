"use client";

import { useEffect } from "react";

// Плавное появление блоков при скролле.
// Ищет все элементы с атрибутом data-reveal и добавляет им класс is-visible,
// когда они попадают в экран. Стили лежат в app/global.css.
export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
