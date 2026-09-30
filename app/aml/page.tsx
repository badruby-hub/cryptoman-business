import type { Metadata } from "next";
import Legal from "@/components/Legal/Legal";
import doc from "@/components/Legal/content/aml";

export const metadata: Metadata = {
  title: "Политика по борьбе с отмыванием денег — CRYPTOMAN",
  description: doc.intro,
};

export default function Page() {
  return <Legal doc={doc} current="/aml" />;
}
