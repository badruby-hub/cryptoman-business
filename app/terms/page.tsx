import type { Metadata } from "next";
import Legal from "@/components/Legal/Legal";
import doc from "@/components/Legal/content/terms";

export const metadata: Metadata = {
  title: "Пользовательское соглашение — CRYPTOMAN",
  description: doc.intro,
};

export default function Page() {
  return <Legal doc={doc} current="/terms" />;
}
