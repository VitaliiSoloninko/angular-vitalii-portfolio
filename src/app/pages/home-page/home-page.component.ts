import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPageComponent } from '../blog-page/blog-page.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { SkillsComponent } from './sections/skills/skills.component';

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
    RouterLink,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
