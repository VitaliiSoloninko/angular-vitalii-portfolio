import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../shared';
import { AboutImageComponent } from './components/about-image/about-image.component';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';

@Component({
  selector: 'app-about',
  imports: [AboutIntroComponent, AboutImageComponent, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
