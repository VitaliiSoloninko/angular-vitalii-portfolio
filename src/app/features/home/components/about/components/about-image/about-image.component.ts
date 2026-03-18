import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-image',
  imports: [],
  templateUrl: './about-image.component.html',
  styleUrl: './about-image.component.scss',
})
export class AboutImageComponent {
  imagePath = input<string>('assets/main/picture.png');
  imageAlt = input<string>('Picture');
}
