import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactsComponent,
    FooterComponent,
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-vitalii-portfolio';
}
