import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { CareerTimelineComponent } from '../../components/career-timeline/career-timeline.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-home-page',
  imports: [
    AboutComponent,
    PortfolioComponent,
    CareerTimelineComponent,
    SkillsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
