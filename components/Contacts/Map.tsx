"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Map as MapLibreMap } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import classes from "./map.module.css";

// Карта на MapLibre (та же библиотека, что внутри mapcn).
// Координаты офиса: [долгота, широта]. Поправь, если метка стоит неточно.
const OFFICE: [number, number] = [45.6813, 43.3314];
const ADDRESS = "Республика Чечня, Малгобекская улица, 19";
const ROUTE_URL = `https://yandex.ru/maps/?rtext=~${OFFICE[1]},${OFFICE[0]}&rtt=auto`;
const MAP_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

export default function OfficeMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [markerEl, setMarkerEl] = useState<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [popupOpen, setPopupOpen] = useState(true);

  useEffect(() => {
    let map: MapLibreMap | undefined;
    let cancelled = false;

    // maplibre работает только в браузере, поэтому грузим его здесь
    import("maplibre-gl").then((maplibregl) => {
      if (cancelled || !containerRef.current) return;

      // Воркер карты лежит в public/maplibre (копируется при npm install, см. postinstall).
      // Без этого Next.js не находит его: "Worker failed to load".
      maplibregl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");

      map = new maplibregl.Map({
        container: containerRef.current,
        style: MAP_STYLE,
        center: OFFICE,
        zoom: 15,
        attributionControl: { compact: true },
        // Колесо мыши / один палец не перехватывают скролл страницы
        cooperativeGestures: true,
        locale: {
          "CooperativeGesturesHandler.WindowsHelpText": "Зажмите Ctrl и крутите колесо, чтобы изменить масштаб",
          "CooperativeGesturesHandler.MacHelpText": "Зажмите ⌘ и крутите колесо, чтобы изменить масштаб",
          "CooperativeGesturesHandler.MobileHelpText": "Двигайте карту двумя пальцами",
        },
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

      // Свой HTML-элемент для метки — в него React рендерит содержимое (как MarkerContent в mapcn)
      const el = document.createElement("div");
      new maplibregl.Marker({ element: el, anchor: "bottom" }).setLngLat(OFFICE).addTo(map);
      setMarkerEl(el);

      map.on("load", () => setLoaded(true));
      // Если стиль карты не загрузился (нет сети) — всё равно убираем заглушку
      map.on("error", () => setLoaded(true));
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <div ref={containerRef} className={classes.map} />
      {!loaded && <div className={classes.skeleton}>Загрузка карты…</div>}

      {markerEl &&
        createPortal(
          <div className={classes.marker}>
            {popupOpen && (
              <div className={classes.popup}>
                <button
                  type="button"
                  className={classes.popup__close}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPopupOpen(false);
                  }}
                  aria-label="Скрыть"
                >
                  ×
                </button>
                <strong className={classes.popup__title}>CRYPTOMAN</strong>
                <span className={classes.popup__text}>{ADDRESS}</span>
                <span className={classes.popup__time}>Ежедневно 10:00 – 00:00 МСК</span>
                <a className={classes.popup__link} href={ROUTE_URL} target="_blank" rel="noopener noreferrer">
                  Построить маршрут →
                </a>
              </div>
            )}
            <button
              type="button"
              className={classes.pin}
              onClick={() => setPopupOpen(!popupOpen)}
              aria-label="Показать адрес офиса"
            >
              <span className={classes.pin__pulse}></span>
              <span className={classes.pin__body}>
                <span className={classes.pin__letter}>G</span>
              </span>
            </button>
          </div>,
          markerEl
        )}
    </div>
  );
}
