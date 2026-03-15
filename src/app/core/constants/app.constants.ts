// Menu navigation items
export const MENU_ITEMS = [
  {
    name: 'Über mich',
    link: '#about',
  },
  {
    name: 'Portfolio',
    link: '#portfolio',
  },
  {
    name: 'Berufserfahrung',
    link: '#experience',
  },
  {
    name: 'Fähigkeiten',
    link: '#skills',
  },
];

// Route paths
export const ROUTE_PATHS = {
  HOME: '',
  PORTFOLIO: 'portfolio',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  CONTACTS: 'contacts',
  BLOG: 'blog',
  PROJECT: 'project',
  BLOG_ARTICLE: 'blog-article',
  SEARCH: 'search',
  TAG: 'tag',
} as const;
