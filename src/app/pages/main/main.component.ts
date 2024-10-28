import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ContactsComponent } from '../../sections/contacts/contacts.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { PortfolioComponent } from '../../sections/portfolio/portfolio.component';
import { SkillsComponent } from '../../sections/skills/skills.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactsComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
