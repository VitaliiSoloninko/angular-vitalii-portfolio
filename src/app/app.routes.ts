import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./features/portfolio/portfolio.routes').then(
        (m) => m.PORTFOLIO_ROUTES,
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./features/blog/blog.routes').then((m) => m.BLOG_ROUTES),
  },
  // Backward compatibility redirects (optional)
  {
    path: 'blog-article/:id',
    redirectTo: 'blog/article/:id',
    pathMatch: 'full',
  },
];
