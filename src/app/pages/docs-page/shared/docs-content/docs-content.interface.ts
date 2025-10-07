export interface DocsItem {
  text: string;
  subitems?: string[];
}

export interface DocsSubsection {
  title: string;
  items: DocsItem[];
}

export interface DocsSection {
  title: string;
  description?: string;
  items?: DocsItem[];
  subsections?: DocsSubsection[];
}
