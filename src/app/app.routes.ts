import { Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsComponent } from './pages/home-page/sections/contacts/contacts.component';
import { ExperienceComponent } from './pages/home-page/sections/experience/experience.component';
import { PortfolioComponent } from './pages/home-page/sections/portfolio/portfolio.component';
import { SkillsComponent } from './pages/home-page/sections/skills/skills.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'projects', component: ProjectsPageComponent },

  { path: 'search/:searchTerm', component: PortfolioComponent },
  { path: 'tag/:tag', component: PortfolioComponent },
];
