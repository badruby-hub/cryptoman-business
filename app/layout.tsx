import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Circles from "@/components/Background/Circles";
import RightMenu from "@/components/Burger-Menu/Right-contact/Right-menu";
import Metrika from "@/app/utils/metrika";

// Шрифт с кириллицей — текст читается лучше, чем Arial
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRYPTOMAN-BUSINESS",
  description: "CRYPTOMAN BUSINESS",
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <RightMenu />
        <Circles />
        <Header />
        {children}
        <Footer />
        <Metrika />
      </body>
    </html>
  );
}
