"use client";

import Script from "next/script";

export default function Metrika() {
  return (
    <>
    {/*Yandex Metrika*/}
      <Script 
      id="metrika"
      strategy="afterInteractive"
      >{`
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104892794', 'ym');
    ym(104892794, 'init', {
         ssr:true,
         webvisor:true,
         clickmap:true, 
         ecommerce:"dataLayer", 
         accurateTrackBounce:true, 
         trackLinks:true
         });
    `}</Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/104892794"
            style={{position:"absolute", left:"-9999px"}}
            alt=""
          />
        </div>
      </noscript>
      {/* Google analytics */}
      <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-QK6L17ZYWN"
      id="google-analytics-script"
      strategy="afterInteractive"/>
      <Script 
      id="google-analytics-init"
      strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QK6L17ZYWN',{ send_page_view: true });
      `}</Script>
    </>
  );
}
