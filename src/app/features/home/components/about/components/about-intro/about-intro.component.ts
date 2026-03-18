import { Component, input } from '@angular/core';
import { TitleComponent } from '../../../../../../shared';
import { SocialLinksComponent } from '../../../../../../shared/social-links/social-links.component';

@Component({
  selector: 'app-about-intro',
  imports: [SocialLinksComponent, TitleComponent],
  templateUrl: './about-intro.component.html',
  styleUrl: './about-intro.component.scss',
})
export class AboutIntroComponent {
  subtitle = input<string>('Mein Name ist');
  name = input<string>('Vitalii');
  surname = input<string>('Soloninko');
  description = input<string>(
    'Ich bin ein leidenschaftlicher <strong>Frontend Developer</strong> mit über 5 Jahren praktischer Erfahrung. Mein Schwerpunkt liegt auf Angular, TypeScript und JavaScript; außerdem habe ich gute Kenntnisse im Backend-Bereich und mit Datenbanken.',
  );
}
