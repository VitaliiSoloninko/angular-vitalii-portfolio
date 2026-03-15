import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { SkillsComponent } from './sections/skills/skills.component';

@Component({
  selector: 'app-home-page',
  imports: [
    AboutComponent,
    PortfolioComponent,
    ExperienceComponent,
    SkillsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
