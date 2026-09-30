import type { Metadata } from "next";
import Legal from "@/components/Legal/Legal";
import doc from "@/components/Legal/content/privacy";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — CRYPTOMAN",
  description: doc.intro,
};

export default function Page() {
  return <Legal doc={doc} current="/privacy" />;
}
