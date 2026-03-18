import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../../shared/social-links/social-links.component';
import { TitleComponent } from '../../../../shared';

@Component({
  selector: 'app-about',
  imports: [SocialLinksComponent, TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
