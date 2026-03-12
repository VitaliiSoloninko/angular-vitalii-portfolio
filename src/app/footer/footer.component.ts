import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from '../shared/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
