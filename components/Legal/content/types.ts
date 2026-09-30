// Формат юридического документа.
// id раздела — это якорь в адресе (например /terms#rates), пиши латиницей.
export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDocument = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};
