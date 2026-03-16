import { Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogArticlePageComponent } from './pages/blog-article-page/blog-article-page.component';

export const BLOG_ROUTES: Routes = [
  {
    path: '',
    component: BlogPageComponent,
  },
  {
    path: 'article/:id',
    component: BlogArticlePageComponent,
  },
];
