import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { BlogPageComponent } from '../blog-page/blog-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutComponent,
    PortfolioComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactsComponent,
    BlogPageComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
