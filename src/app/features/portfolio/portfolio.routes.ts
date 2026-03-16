import { Routes } from '@angular/router';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';

export const PORTFOLIO_ROUTES: Routes = [
  {
    path: ':id',
    component: ProjectDetailPageComponent,
  },
];
