import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './sections/main/main.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    PortfolioComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-vitalii-portfolio';
}
