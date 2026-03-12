import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../../shared/social-links/social-links.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
